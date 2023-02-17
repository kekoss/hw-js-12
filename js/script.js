// 1. Тому, що в деяких ситуаціях користувач може вводити дані не через клавіатуру


const buttons = document.querySelectorAll('.btn');
let prevActiveButton;

document.addEventListener('keydown', function(event) {
  const pressedBtn = event.key.toLowerCase();
  // console.log(pressedBtn);

  buttons.forEach(function(button) {
    const buttonLetter = button.textContent.toLowerCase();
    
    if (buttonLetter === pressedBtn) {
      button.classList.toggle('active');
      prevActiveButton = button;
    } else {
      button.classList.remove('active');
    }
  });

  if (prevActiveButton && !prevActiveButton.classList.contains('active')) {
    prevActiveButton.classList.remove('active');
  }
});





