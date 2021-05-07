const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActiveCircle = 1;

next.addEventListener('click', () => {
  currentActiveCircle++;

  if(currentActiveCircle > circles.length) {
    currentActiveCircle = circles.length;
  }

  checkButtonStatus();
  update();
})

prev.addEventListener('click', () => {
  currentActiveCircle--;

  if(currentActiveCircle < 1) {
    currentActiveCircle = 1;
  }

  checkButtonStatus();
  update();
})

function update() {
  circles.forEach((circle, index) => {
    (index < currentActiveCircle) ? circle.classList.add('active') : circle.classList.remove('active');
  })

  const actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
}

function checkButtonStatus() {
  if(currentActiveCircle > 1 || currentActiveCircle < circles.length) {
    prev.removeAttribute('disabled');
    next.removeAttribute('disabled');
  }
  if(currentActiveCircle >= circles.length) {
    next.setAttribute('disabled', 'true');
  }
  if(currentActiveCircle <= 1) {
    prev.setAttribute('disabled', 'true');
  }
}