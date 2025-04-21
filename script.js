let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");
let h1 = document.getElementsByTagName("h1");

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fulltext=true`;

  console.log(finalURL);
  fetch(finalURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data[0]);
      console.log(data[0].name.common);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].continents[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );
      result.innerHTML = `
<img src="${data[0].flags.svg}" class="flag-img">  
<h2>${data[0].name.common}</h2> 
<div class="wrapper">
  <div class="data-wrapper">
    <h4>Capital: </h4> <span>${data[0].capital[0]}</span>
  </div>
  <div class="data-wrapper">
    <h4>Continent: </h4> <span>${data[0].continents[0]}</span>
  </div>
  <div class="data-wrapper">
    <h4>Currency: </h4> <span>${
      data[0].currencies[Object.keys(data[0].currencies)].name
    }</span>
  </div>
  <div class="data-wrapper">
    <h4>Languages: </h4> <span>${Object.values(data[0].languages)
      .toString()
      .split(",")
      .join(", ")}</span>
  </div>
</div>

`;
    });
});
