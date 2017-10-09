//setup variables
    var letterOne = "_";
    var letterTwo = " _";
    var letterThree = " _";
    var letterFour = " _";
    var letterFive = " _";
    var letterSix = " _";
    var letterSeven = " _";
    var letterEight = " _";
    var letterNine = " _";
    var wrongGuesscounter = 0;
    var correctGuessCounter = 0;
    var fullWord = (letterOne + letterTwo + letterThree + letterFour + letterFive + letterSix + letterSeven + letterEight + letterNine);
    var fullAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var existingAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codeWord = "GALVANIZE";

//Display Title Page
document.write ("Hangman Game!");

//Player Prompted to Begin//
var readyOrNot = prompt("Are You Ready to play HANGMAN?  Type 'Yes' to begin");

//If Yes then Start//
if (readyOrNot === "Yes") {
    alert("Let's get started then! There are 9 letters in this word.  You can get 5 answers wrong before game over.");

    //Display the current totals
    alert("Word = " + fullWord + "     " + "Wrong Answers left = " + (5 - wrongGuesscounter));

    //loop if less than 5 wrong guesses
    for (wrongGuesscounter = 0; wrongGuesscounter < 5; wrongGuesscounter = wrongGuesscounter + 0) {

        //Prompt user  to enter a letter
        guessLetter = prompt("Enter A Guess, it has to be a single letter!");
        guessLetter = guessLetter.toUpperCase();
        alert("You guessed '" + guessLetter + "'");

        //see if letter is one character long
        if (guessLetter.length === 1) {

            //see if letter is actually in Alphabet
            var isItInAlphabet = fullAlphabet.search(guessLetter);
            if (isItInAlphabet > -1) {

                //Check to see if it's in the leftover letters
                var isItInExistingAlphabet = existingAlphabet.search(guessLetter);
                if (isItInExistingAlphabet > -1) {

                    //Check to see if the guess is a part of the code word
                    var isItInCodeWord = codeWord.search(guessLetter);
                    if (isItInCodeWord > -1) {

                        //if it's in the code word, let user know they guessed a letter correct
                        //then change the existing alphabet to not include the guessed letter
                        alert("You guessed a correct letter!  Nice!");
                        existingAlphabet = existingAlphabet.replace(guessLetter, "_");
                        correctGuessCounter = correctGuessCounter + 1

                        //change current word display
                        if (guessLetter === "G"){
                            var letterOne = "G";
                        }
                        if (guessLetter === "A"){
                            var letterTwo = " A";
                            var letterFive = " A";
                        }
                        if (guessLetter === "L"){
                            var letterThree = " L";
                        }
                        if (guessLetter === "V"){
                            var letterFour = " V";
                        }
                        if (guessLetter === "N"){
                            var letterSix = " N";
                        }
                        if (guessLetter === "I"){
                            var letterSeven = " I";
                        }
                        if (guessLetter === "Z"){
                            var letterEight = " Z";
                        }
                        if (guessLetter === "E"){
                            var letterNine = " E";
                        }

                        //Display the current totals
                        //make sure all the fullWord variables are in order
                        var fullWord = (letterOne + letterTwo + letterThree + letterFour + letterFive + letterSix + letterSeven + letterEight + letterNine);
                        alert("Word = " + fullWord + "     " + "Wrong Answers left = " + (5 - wrongGuesscounter));

                        if (correctGuessCounter === 8) {
                            wrongGuesscounter = 5
                            alert("Good Job!  You solved the puzzle!  Have a good day!");
                        }

                    } else if (isItInCodeWord = -1) {

                        //if it's not in the Code word, tell user to retry
                        //also set wrong guess counter +1
                        //also also take letter out of existing letters
                        alert("Nice Try, but no Cigar.  Try Again!");
                        wrongGuesscounter = wrongGuesscounter + 1
                        existingAlphabet = existingAlphabet.replace(guessLetter, "_");

                        //Display the current totals
                        alert("Word = " + fullWord + "     " + "Wrong Answers left = " + (5 - wrongGuesscounter));

                        if (wrongGuesscounter === 5){
                            alert("You have had too many wrong guesses.  Too bad for you!")
                        }
                    }

                } else if (isItInExistingAlphabet === -1) {
                    //if it's not in Existing Alphabet, let user know that letter has already been guessed
                    alert("That letter has already been guessed, sorry, try again.");
                    isItInExistingAlphabet = -1;
                }

            } else if (isItInAlphabet === -1) {

                //if it's not a letter, ask again
                alert("That is not a letter, sorry, try again.");
                isItInAlphabet = -1;
            }
        }else if (guessLetter !== 1) {

            //alert player that only one character can be entered
            alert("You can only enter one character, not zero or more than one.  Try Again!");
        }
    }
}else if (readyOrNot !== "Yes") {
    //alert player that apparently they don't want to play because they can't type correctly
    alert("Looks like you don't want to play.  Goodbye");
}









