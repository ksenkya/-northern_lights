// Добавить обработчик событий ко всем элементам с классом 'arrow', чтобы открывать диалоговое окно при клике
document.querySelectorAll('.arrow').forEach(function(arrow) {
  arrow.addEventListener('click', function() {
    const dialog = document.querySelector('dialog');
    if (!dialog.open) {
      dialog.showModal();
    }
  });
});

// Добавить обработчик событий элементу с классом 'closeModal', чтобы закрыть диалоговое окно при клике
document.querySelector('.closeModal').addEventListener('click', function() {
  const dialog = document.querySelector('dialog');
  dialog.close();
});

// Добавить обработчик событий элементу с классом 'open' внутри '.boxSelectTrain', чтобы переключать видимость элемента '.myList' при клике
document.querySelector('.boxSelectTrain .open').addEventListener('click', function() {
  const myList = document.querySelector('.boxSelectTrain .myList');
  myList.classList.toggle('dnone');
});

// Функция для установки текстового содержимого и скрытия списка при выборе элемента
function select() {
  document.querySelector('#text').textContent = 'Тренер Тренер';
  document.querySelector('.boxSelectTrain .myList').classList.add('dnone');
}
