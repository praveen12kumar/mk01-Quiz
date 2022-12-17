var readlineSync = require('readline-sync');
var score = 0;
var admin = {
  name: "Praveen Kumar",
  score: 0
}

var questions = [{
  no: 1,
  question: "When was ms Dhoni born? ",
  answer: "7 july"
}, {
  no: 2,
  question: "What was MS Dhoni's highest score against Pakistan? ",
  answer: "148"
}, {
  no: 3,
  question: "What was MS Dhoni's one-day highest score?",
  answer: "183"
}, {
  no: 4,
  question: "In the Indian Premier League, MS Dhoni captained which team? ",
  answer: "chennai"
}, {
  no: 5,
  question: "In which year did Dhoni win the Rajiv Gandhi Khel Ratna award? ",
  answer: "2008"
}, {
  no: 6,
  question: "In which year was MS Dhoni appointed Indian captain? ",
  answer: "2007"
}
];

var userName = readlineSync.question("Lets see how well you know MS Dhoni. may i have your name? ");
console.log("Hi ! " + userName + " Lets Play!");

function play(question, answer, no) {
  console.log(" ");
  console.log("Let's see your " + no + " question ");
  var currentAnswer = readlineSync.question(question);

  if (currentAnswer.toLowerCase === answer.toLowerCase) {
    score++;
    console.log("yeah you are right ");
  }
  else {
    console.log("opps you are wrong ");
  }
}

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer, questions[i].no);
}

console.log(" ");
console.log("Quiz is Over and your final score is " + score);

if(admin.score <= score) {
  console.log("Hurrayy! " + userName + " You know MS Dhoni very well! ");
  admin.score = score;
  admin.name = userName;
}
else {
  console.log(admin.name + " knows MS Dhoni the best with the score of " + admin.score);
}




