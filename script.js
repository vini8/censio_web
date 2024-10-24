// tailwind configuration

tailwind.config = {
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
};

// function for dashboard progress circle

function circleProgressBar(containerIndex, progressEndValue) {
  let progressBar = document.querySelector(".container" + containerIndex);
  let barValue = document.querySelector(".container-value" + containerIndex);

  let progressValue = 0;

  let speed = 30;

  let progress = setInterval(() => {
    progressValue++;
    if (barValue) {
      barValue.textContent = `${progressValue}%`;
      progressBar.style.background = `conic-gradient(
          #F5AB3C,  #F53C3C ${progressValue * 3.6}deg,
          #f0f5ff ${progressValue * 3.6}deg
      )`;
    }

    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

circleProgressBar(1, 80);
circleProgressBar(2, 40);
circleProgressBar(3, 30);
circleProgressBar(4, 10);
circleProgressBar(5, 70);

// function for dark mode toggle in sidebar

const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");
const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};
//calling the function directly toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);

// function for collapsible sidebar

const sidebar = document.querySelector("#sidebar");
const sidebarToggle = document.querySelector("#sidebar-toggle");
const mainSection = document.querySelector("#main_section");
const vector = document.querySelector("#menu_vector");
const lightIcon = document.querySelector("#light_icon");
const darkIcon = document.querySelector("#dark_icon");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("w-64");
  sidebar.classList.toggle("md:w-20");
  // sidebarToggle.classList.toggle("");
  mainSection.classList.toggle("md:w-full");
  mainSection.classList.toggle("lg:w-full");
  mainSection.classList.toggle("xl:w-full");
  mainSection.classList.toggle("2xl:w-full");
  mainSection.classList.toggle("3xl:w-full");
  vector.classList.toggle("w-0");
  lightIcon.classList.toggle("w-0");
  darkIcon.classList.toggle("w-0");
  vector.classList.toggle("md:opacity-0");
  lightIcon.classList.toggle("md:opacity-0");
  darkIcon.classList.toggle("md:opacity-0");
});

// function for search toogle in mobile viewport

function searchToggle() {
  document.getElementById("search-block").classList.toggle("hidden");
}
// function for user profile toggle

function userToggle() {
  document.querySelector("#userProfile").classList.toggle("top-24");
  document.querySelector("#userProfile").classList.toggle("opacity-100");
}
