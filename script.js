
const checkBtn = document.getElementById("checkBtn");
const results = document.getElementById("resultBox");


const checkAnswers = () => {

    const answers = {
        q1: "june-26",
        q2: "piggy-smallz",
        q3: "7-rings",
        q4: "sam-and-cat",
        q5: "florida"
    }

    let score = 0;

    for (const [question,correctAnswer] of Object.entries(answers)) {

        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);

        if (selectedAnswer.value === correctAnswer) {
            score = score + 2;
        }
    }

    const resultBox = document.getElementById('resultBox');
    resultBox.style.visibility = 'visible';
 
    results.textContent = "Score: " + score + "/10";
}

checkBtn.addEventListener("click",checkAnswers);