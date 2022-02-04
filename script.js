
let cities = [
  "Warsaw",
  "Berlin",
  "Paris",
  "London",
  "New York",
  "Tokio",
  "Moscow",
];

function addListToBody() {
  let newOrderedList = document.createElement("ol");

  document.body.appendChild(newOrderedList);

  for (let i = 0; i < cities.length; i++) {

    var element = document.createElement("li");
    element.className = "city";
    element.innerText = cities[i];
    newOrderedList.appendChild(element);
  }
}
