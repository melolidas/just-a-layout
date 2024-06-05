new Swiper(".swiper1", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  pagination: {
    el: ".pagi1",
    clickable: true,
  },
});
new Swiper(".swiper2", {
  loop: true,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});

const vacancyElements = document.querySelectorAll(".one-vacancy");

vacancyElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

const selectedElements = document.querySelectorAll(".select-one");

selectedElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

const footerBlock = document.querySelectorAll(".one-footer-city-block");

footerBlock.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

const dropdown = document.querySelector(".dropdown");
const toggleButton = document.querySelector(".dropdown-toggle");
const dropdownItems = document.querySelectorAll(".dropdown-item");

toggleButton.addEventListener("click", function (event) {
  dropdown.classList.toggle("show");
  event.stopPropagation();
  event.preventDefault();
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    toggleButton.textContent = this.textContent;
    dropdown.classList.remove("show");
  });
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("show");
  }
});

function openModal() {
  document.getElementById("popup").style.display = "block";
}

function closeModal() {
  document.getElementById("popup").style.display = "none";
}

const nameInp = document.querySelector("#name");
const phoneInp = document.querySelector("#phone");

function сloseModal_OpenOther() {
  if (!nameInp.value.trim() || !phoneInp.value.trim()) {
    alert("some inputs are empty!");
    return;
  }
  document.getElementById("popup").style.display = "none";
  document.getElementById("popup2").style.display = "block";
  nameInp.value = "";
  phoneInp.value = "";
}

function closeModal2() {
  document.getElementById("popup2").style.display = "none";
}

const vacancies = document.querySelectorAll(".view-one-vacancy");

vacancies.forEach((vacancy) => {
  const moreBlock = vacancy.querySelector(".more-block .toggle-more-info");
  const moreInfo = vacancy.querySelector(".more-info");

  moreBlock.addEventListener("click", function () {
    moreInfo.classList.toggle("active");
    moreBlock.classList.toggle("active");
  });
});

const advantages = document.querySelectorAll(".advantage-block");

advantages.forEach((advantage) => {
  const moreBlock = advantage.querySelector(".toggle-more-info");
  const advantageDescription = advantage.querySelector(
    ".advantage-description"
  );

  moreBlock.addEventListener("click", function () {
    moreBlock.classList.toggle("active");
    advantageDescription.classList.toggle("active");
  });
});
