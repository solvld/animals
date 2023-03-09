import './App.css';
import {animals} from './assets/animals'


let title = "";

const background = (
  <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1651049047_2-vsegda-pomnim-com-p-tikhii-okean-pod-vodoi-foto-2.jpg" alt="ocean" className="background" />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="buttn"
      onClick={displayFact}
    />
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
        <p id="fact"></p>
        {background}
        <div className="animals">{images}</div>
      </div>
    </div>
  );
}


function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];

  let randomIndex = Math.floor(Math.random() * animalInfo.facts.length);

  document.getElementById("fact").innerHTML = animalInfo.facts[randomIndex];
}





export default App;
