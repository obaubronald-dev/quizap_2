const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    { question: "1. Which of the following elements remains liquid at room temperature under slight pressure?", answers: [{ text: "Bromine", correct: true }, { text: "Mercury", correct: false }, { text: "Gallium", correct: false }, { text: "Cesium", correct: false }] },
    { question: "Which ancient civilization first used a true zero as a placeholder and a numeral?", answers: [{ text: "Babylonians", correct: false }, { text: "Egyptians", correct: false }, { text: "Maya", correct: true}, { text: "Chinese(kaon ilaga)", correct: false }] },
    { question: "What is the only mammal capable of true sustained flight?", answers: [{ text: "Flying Squirrel", correct: false }, { text: "Bat", correct: true }, { text: "Sugar Glider", correct: false }, { text: "Pteropus", correct: false }] },
    { question: "Do you still love her/him?", answers: [{ text: "Absolute Yes", correct: true }, { text: "No❤️‍🩹", correct: false }, { text: "Idc", correct: true}, { text: "Sya pa gyd", correct: false }] },
    { question: "Miss mo Miss Kaba?", answers: [{ text: "NO", correct: false }, { text: "YESSSS", correct: true }, { text: "Agay Nalang Talaga", correct: false }, { text: "NO Comment", correct: true }] },
    { question: "What is 10 - 4?", answers: [{ text: "6", correct: true }, { text: "5", correct: false }, { text: "7", correct: false }, { text: "8", correct: false }] },
    { question: "What is the boiling point of water?", answers: [{ text: "100°C", correct: true }, { text: "90°C", correct: false }, { text: "80°C", correct: false }, { text: "110°C", correct: false }] },
    { question: "What is 8 divided by 2?", answers: [{ text: "4", correct: true }, { text: "6", correct: false }, { text: "3", correct: false }, { text: "2", correct: false }] },
    { question: "What is the largest planet in our solar system?", answers: [{ text: "Jupiter", correct: true }, { text: "Earth", correct: false }, { text: "Mars", correct: false }, { text: "Saturn", correct: false }] },
    { question: "What is 7 + 5?", answers: [{ text: "12", correct: true }, { text: "11", correct: false }, { text: "13", correct: false }, { text: "10", correct: false }] },
    { question: "What is the name of the force that pulls us down?", answers: [{ text: "Gravity", correct: true }, { text: "Magnetism", correct: false }, { text: "Electricity", correct: false }, { text: "Friction", correct: false }] },
    { question: "What is 9 x 2?", answers: [{ text: "18", correct: true }, { text: "16", correct: false }, { text: "14", correct: false }, { text: "20", correct: false }] },
    { question: "What is the smallest planet in our solar system?", answers: [{ text: "Mercury", correct: true }, { text: "Mars", correct: false }, { text: "Venus", correct: false }, { text: "Earth", correct: false }] },
    { question: "What is 15 - 6?", answers: [{ text: "9", correct: true }, { text: "8", correct: false }, { text: "7", correct: false }, { text: "10", correct: false }] },
    { question: "What is 4 x 4?", answers: [{ text: "16", correct: true }, { text: "12", correct: false }, { text: "14", correct: false }, { text: "18", correct: false }] }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        score++;
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "#81c784";
        } else {
            button.style.backgroundColor = "#e57373";
        }
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
