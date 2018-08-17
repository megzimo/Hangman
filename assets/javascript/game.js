let wordsList = [
  "bender",
  "leela",
  "fry",
  "zoidberg",
  "hermes",
  "lrrr",
  "professor",
  "amy",
  "groening",
  "zapp",
  "nibbler",
  "labarbara",
  "kiff",
  "scruffy",
  "mom",
  "morbo",
  "flexo",
  "calculon",
  "clamps",
  "donbot",
  "elzar",
  "hedonismbot",
  "smitty",
  "url",
];

let chosenWord = "";

let letterInChosenWord = [];

let numBlanks = 0;

let blanksAndSuccesses = [];

let completeWord = [];

let wrongGuesses = [];

let winCounter = 0;

let lossCounter = 0;

let numGuesses = 7;



function onLoad() {
  numGuesses = 9;

  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

  console.log("chosenWord: ", chosenWord);
  letterInChosenWord = chosenWord.split("");

  numBlanks = letterInChosenWord.length;

  blanksAndSuccesses = [];

  for (let i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
  }
  console.log(blanksAndSuccesses);

  document.querySelector(".GuessesLeft").innerHTML = numGuesses;
  document.querySelector("#word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.querySelector(".wrongGuesses").innerHTML = wrongGuesses.join(" ");

}

onLoad();

function endGame(){
        onLoad();
        wrongGuesses = [];
        document.querySelector(".wrongGuesses").innerHTML = wrongGuesses;
}

document.onkeyup = function (event) { // on key release event occurs
    
//logic(if statement) to determine a-z accepted event.key that wrapts whole keyup function

    let letterGuessed = event.key.toLocaleLowerCase(); // toLocale for foreign languages!
  console.log('letterGuessed (start):',letterGuessed);
  let correctLetter = false; // flag for "if" statement to run/not run

  for (let i = 0; i < numBlanks; i++) {
    if (letterGuessed === chosenWord[i]) {
        correctLetter = true;
      }
  }

  if (correctLetter) {
      for (let j = 0; j < numBlanks; j++) {
          if (chosenWord[j] === letterGuessed) {
              blanksAndSuccesses[j] = letterGuessed;
              document.querySelector("#word-blanks").innerHTML = blanksAndSuccesses.join(" ");
             }
         }

         completeWord = letterInChosenWord.toString();
         console.log("complete word ", completeWord); 
         console.log("blanksAndSuccesses", blanksAndSuccesses);
         console.log("letters in chosen word", letterInChosenWord);

         if (completeWord === blanksAndSuccesses.toString()){ //check with "typeof" and convert array to string
            winCounter = winCounter + 1;
            document.querySelector(".wins").innerHTML = winCounter;
            endGame();
         }     
      console.log(blanksAndSuccesses);

  } else {
    console.log("index of wrong guess", wrongGuesses.indexOf(wrongGuesses))
    // if wrong guesses does NOT include the key we pressed
    if (!wrongGuesses.includes(event.key)) {
            console.log('wrong guess is:', letterGuessed)
            wrongGuesses.push(letterGuessed)
            console.log("wrong guess: ", wrongGuesses);
            document.querySelector(".wrongGuesses").innerHTML = wrongGuesses.join(", ");
            numGuesses = numGuesses - 1;
            document.querySelector(".GuessesLeft").innerHTML = numGuesses;
            console.log(numGuesses);
    }

  } 
    

  if (numGuesses === 0) {
    lossCounter = lossCounter + 1;
    document.querySelector(".losses").innerHTML = lossCounter;
    endGame();
  }
}
