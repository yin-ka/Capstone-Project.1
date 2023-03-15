const navbar = document.querySelector('.menu-nav');
const openbtn = document.querySelector('.menu');
const closebtn = document.querySelector('.menu-close');
const toggleBtn = document.querySelector('.button-menu');
const lists = document.querySelector('.nav-mobile');
const navMobileList = document.querySelectorAll('.nav-mobile-list');
function toggler() {
  closebtn.classList.toggle('close-menu-active');
  openbtn.classList.toggle('menu-close');
  navbar.classList.toggle('mobile-menu');
  lists.classList.toggle('nav-mobile-active');
}
toggleBtn.addEventListener('click', toggler);
navMobileList.forEach((elem) => {
  elem.addEventListener('click', toggler);
});

const projects = [
  {
    id: 1,
    name: 'Stet voluptua',
    title: 'Stet voluptua vero sanctus stet clitan elitr.',
    description: 'Dolor diam sed voluptua magna et consetetur. Eos sit eos.',
    featured_image: 'images/speaker1.jpeg',
  },
  {
    id: 2,
    name: 'Stet voluptua',
    title: 'Diam amet ipsum diam kasd duo sit diam lorem, sit dolore.',
    description: 'Stet voluptua vero sanctus stet clita ea sed est. Gubergren elitr.',
    featured_image: 'images/speaker2.jpeg',
  },
  {
    id: 'desk-image-3',
    name: 'lorem nonumy',
    title: 'Kasd consetetur lorem nonumy.',
    description: 'Stet voluptua vero sanctus stet clita ea sed est. Gubergren elitr.',
    featured_image: 'images/speaker3.jpeg',
  },
  {
    id: 'desk-image-4',
    name: 'Stet voluptua',
    title: 'Stet voluptua',
    description: 'Stet voluptua vero sanctus stet clita ea sed est. Gubergren elitr.',
    featured_image: 'images/speaker4.jpeg',
  },
  {
    id: 'desk-image-5',
    name: 'Stet voluptua',
    title: 'Stet voluptua vero sanctus',
    description: 'Stet voluptua vero sanctus stet clita ea sed est. Gubergren elitr.s',
    featured_image: 'images/speaker5.jpeg',
  },
  {
    id: 'desk-image-6',
    name: 'Stet voluptua',
    title: 'Stet voluptua',
    description: 'Stet voluptua vero sanctus stet clita ea sed est. Gubergren elitr.s',
    featured_image: 'images/speaker6.jpeg',
  },
];

window.onload = () => {
  const newContainer = document.getElementById('speak');
  projects.forEach((project) => {
    const cardsHTML = ` <div class="speaker-card" id="${project.id}">
        <img class="speaker-image" src="${project.featured_image}" alt="Speakers" />
        <div class="speaker-description">
        <h5>${project.name}</h5>
        <i class="profession">
         ${project.title}
        </i>
        <div class="guidebar-speaker"></div>
            <p class="speaker-topic">
               ${project.description}
            </p>
        </div>
    </div>
          `;
    newContainer.insertAdjacentHTML('beforeend', cardsHTML);
  });
};