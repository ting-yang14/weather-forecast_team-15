const apiAuthorizationCode = "CWB-BA8318ED-96EC-4050-BA0B-F51074DCEA4A";
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box");
const optionsList = document.querySelectorAll(".option");
const searchBoxInput = document.querySelector(".search-box > input");
const countrywide = document.getElementById("countrywide");
const countySelected = document.getElementById("countySelected");

selected.addEventListener("click", (event) => {
  event.stopPropagation();
  optionsContainer.classList.toggle("active");
  searchBoxInput.value = "";
  filterList("");
  if (optionsContainer.classList.contains("active")) {
    searchBox.focus;
  }
});

optionsList.forEach((option) => {
  option.addEventListener("click", () => {
<<<<<<< HEAD
    selected.innerHTML = option.querySelector("label").innerHTML;
    LoadCountyWeatherData(selected.innerHTML);
    oneWeekForecast_control.renderResult(selected.innerHTML);
    const countrywide = document.getElementById("countrywide");
    countrywide.style.display = "none";
    optionsContainer.classList.remove("active");
=======
    countyName = option.querySelector("label").textContent;
    setCountyWeather(countyName);
>>>>>>> eca2639ddeefb27f4c98df3715e89e2c09f51677
  });
});

function setCountyWeather(countyName) {
  selected.textContent = countyName;
  document.title = `${countyName}預報`;
  LoadCountyWeatherData(countyName);
  countrywide.setAttribute("hidden", true);
  countySelected.removeAttribute("hidden");
  optionsContainer.classList.remove("active");
  searchBoxInput.value = "";
}

searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
});

const filterList = (searchTerm) => {
  optionsList.forEach((option) => {
    let label = option.firstElementChild.nextElementSibling.innerHTML;
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

const navHomes = document.querySelectorAll(".navbar__home");
navHomes.forEach((navHome) => {
  navHome.addEventListener("click", resetCountrywideWeather);
});

function resetCountrywideWeather() {
  selected.textContent = "請選擇縣市";
  searchBoxInput.value = "";
  countrywide.removeAttribute("hidden");
  countySelected.setAttribute("hidden", true);
}

document.addEventListener("click", (event) => {
  if (
    optionsContainer.classList.contains("active") &&
    !optionsContainer.contains(event.target) &&
    !searchBoxInput.contains(event.target)
  ) {
    optionsContainer.classList.remove("active");
  }
});
