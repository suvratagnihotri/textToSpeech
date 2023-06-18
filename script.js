var questions = [
    // Previous questions...
    {
        question: "Question 3: What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Hg"],
        answer: 0
    },
    {
        question: "Question 4: Who wrote the famous novel 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "George Orwell"],
        answer: 0
    },
    {
        question: "Question 5: Which scientist discovered the theory of general relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
        answer: 0
    },
    {
        question: "Question 6: Which country is home to the tallest mountain, Mount Everest?",
        options: ["Nepal", "China", "India", "Bhutan"],
        answer: 0
    },
    {
        question: "Question 7: Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: 0
    },
    {
        question: "Question 8: What is the largest organ in the human body?",
        options: ["Skin", "Heart", "Liver", "Lungs"],
        answer: 0
    },
    {
        question: "Question 9: Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: 0
    },
    {
        question: "Question 10: Who is known as the 'Father of the Computer'?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: 0
    },
    {
        question: "Question 11: Which city hosted the 2016 Summer Olympics?",
        options: ["Rio de Janeiro", "London", "Tokyo", "Beijing"],
        answer: 0
    },
    {
        question: "Question 12: What is the chemical symbol for oxygen?",
        options: ["O", "H", "C", "N"],
        answer: 0
    },
    {
        question: "Question 13: Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Arthur Miller", "Tennessee Williams", "Samuel Beckett"],
        answer: 0
    },
    {
        question: "Question 14: What is the world's largest ocean?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: 0
    },
    {
        question: "Question 15: Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Louis Pasteur"],
        answer: 0
    },
    {
        question: "Question 16: Which element has the atomic number 79?",
        options: ["Gold", "Silver", "Iron", "Mercury"],
        answer: 0
    },
    {
        question: "Question 17: What is the largest species of shark?",
        options: ["Whale shark", "Great white shark", "Tiger shark", "Hammerhead shark"],
        answer: 0
    },
    {
        question: "Question 18: Who painted the 'Sistine Chapel' ceiling?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        answer: 0
    },
    {
        question: "Question 19: Which country is known as the 'Land of the Rising Sun'?",
        options: ["Japan", "China", "South Korea", "Thailand"],
        answer: 0
    },
    {
        question: "Question 20: Who is the author of the 'Harry Potter' book series?",
        options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "Dan Brown"],
        answer: 0
    }
];


var currentQuestionIndex = 0;

function speakQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var questionText = currentQuestion.question;
    var options = currentQuestion.options;
    var speechText = questionText + ". The options are: ";

    for (var i = 0; i < options.length; i++) {
        speechText += options[i] + ". ";
    }

    speakText(speechText);
}

function speakText(text) {
    var speechSynthesis = window.speechSynthesis;
    var speechText = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speechText);
}


function startExam() {
    location.href = "questions.html";
}

function displayQuestion() {
    var questionContainer = document.getElementById("question");
    questionContainer.innerHTML = "";

    var question = questions[currentQuestionIndex];
    var questionText = document.createElement("p");
    questionText.textContent = question.question;
    questionContainer.appendChild(questionText);

    var options = question.options;
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("input");
        option.type = "radio";
        option.name = "answer";
        option.value = i;
        questionContainer.appendChild(option);

        var optionText = document.createElement("span");
        optionText.textContent = options[i];
        questionContainer.appendChild(optionText);

        var lineBreak = document.createElement("br");
        questionContainer.appendChild(lineBreak);
    }
}

function saveAndNext() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        var selectedAnswer = parseInt(selectedOption.value);
        var currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.answer) {
            // Handle correct answer
        } else {
            // Handle wrong answer
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            // Exam completed, display result or redirect to a different page
            alert("Exam completed!");
        }
    } else {
        alert("Please select an answer.");
    }
}

// Display the first question when the page loads
window.onload = displayQuestion;
