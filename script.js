const STORAGE_KEY = "ourLittleWorld_answers_v1";

const sections = {
    aboutMe: {
        title: "ABOUT ME 🌷",
        description: "Let's see how well you know me!",
        questions: [
            {
                q: "What is fav things too doo? with youu?",
                a: "Enakuuu unnkuda irukaa ellameyyy pudikum daa especiallyyy nu ila...\n\nNamba rendu perum phone ha vechiiitu onna pesuradhuu, nerula pakura appaaa adhan enakuuu rombaa pudichadhuu ❤️❤️❤️\n\nApdi panaleyyy ellame crtt ta irukum nu i thinkedd 😭🥰"
            },
            {
                q: "What is my favourite habbit to do with youuu?",
                a: "Mella irukardhuu dhan.. but when it's comes to habittt...\n\nTake a long ride withoutt even think where it is, like our first tada trip ❤️"
            },
            {
                q: "What is my favourite placee to stayy with youuu?",
                a: "Unkuda enga irundhalumm enakuu okayyy dhan fav dhan...\n\nButt privatee ha irukkanum na meet dhan.. sooo meet pandra placeee ❤️🐣\n\nI want our relationshipp is in pvtt. Not alwaysss ❤️"
            },
            {
                q: "What makes me happy?",
                a: "Unkuda irukardhuu and Vedha kuda irukardhu happieeeyyyy!!! ❤️\n\nAnd my familyy sometimess..\n\nUnkuda irukavum apo apo kadupa irukum nee phone use pandrapaa.... but okk 😭❤️"
            },
            {
                q: "What is one thing I love about you?",
                a: "Caree.... and love... towards mee ❤️"
            }
        ]
    },

    aboutUs: {
        title: "ABOUT US 💑",
        description: "Our story, our bond, our little world.",
        questions: [
            {
                q: "What was your first impression of me?",
                a: "Apdi edhumeyyy illla daa mairuuuuuuuuuuuu!!!!!! 😭😂"
            },
            {
                q: "What is your favourite memory of us?",
                a: "Meet and stayyy naraiyaa irukuuu... but it's pvtttt btw usss ❤️"
            },
            {
                q: "What is the most special thing about our relationship?",
                a: "Uniquee haa freedom dhan enaku irukuu sooo i sayyy it's a freedom u given to mee.....\n\nThevaii aana alavukuu unnkuuuu possessiveness irukuuuu... include jealousyyy, adhuveyy podhumm ❤️"
            },
            {
                q: "What is one moment you want to experience again?",
                a: "School stepss... 😖❤️❤️❤️"
            },
            {
                q: "Where would you like us to go together?",
                a: "Late night beach and late night bike ridee...\n\nYarkitayumm solamaa engana dhoorama, yarumeyy kandu pidikadha place ku poiranumm unkudaa... ❤️\n\nBut it's not a crt time i thinkk...\n\nKalyanam panikooo 😤❤️ seekirama...."
            }
        ]
    },

    wishes: {
        title: "ENKUDA EDHACHUM AASA IRUKKAA? 🎀",
        description: "Tell me about your little wishes and dreams.",
        questions: [
            {
                q: "What is one thing you wish we could do together?",
                a: "Build a home for onlyyy uss 🏡❤️\n\nWith equal moneyy, not yourss fullyyy, not mine fullyyy..."
            },
            {
                q: "Where do you want to travel with me?",
                a: "Ellameyyyy,,, everywhereeee ❤️🌍"
            },
            {
                q: "What is one date idea you want to try?",
                a: "Neeyeeennnn llleennn therlllaaa 😭😂❤️"
            },
            {
                q: "What is something new you want us to experience?",
                a: "Zipline, adventurees, scuba diving.... etcccc 🌊❤️"
            },
            {
                q: "What is one wish you have for our future?",
                a: "Una kalyanam pananum.... idheyy dhan solanumm okayyy vaa 😤❤️"
            }
        ]
    },

    aboutYou: {
        title: "UNNA PATHI SOLLUUU 🩵",
        description: "I want to know more about you.",
        questions: [
            {
                q: "What makes you feel loved?",
                a: "Sapduradhuuu 🍚❤️"
            },
            {
                q: "What is something that always makes you smile?",
                a: "Mee and youuuu ❤️🥹"
            },
            {
                q: "What is your biggest dream?",
                a: "Irukuu butt unkuda dream na marriage matuuu dhann... family la naraiya iruku ❤️"
            },
            {
                q: "What do you like most about yourself?",
                a: "Uhm! Yosikanum 😂❤️"
            },
            {
                q: "What is something you want me to understand about you?",
                a: "Ellameyyyy mudinja varaikummmmm ❤️"
            }
        ]
    }
};

const quizQuestions = [
    {
        q: "Who said 'I love you' first?",
        a: "Therlaaa bhaa apdiyee pochuuu 😭❤️\n\nIpo nallarkuuu... ❤️❤️"
    },
    {
        q: "Who started talking to the other first?",
        a: "Mee friendsss haa!!! 😂❤️"
    },
    {
        q: "What is our favourite memory together?",
        a: "Sandaa podradhuu nerulaaa 😭❤️"
    },
    {
        q: "Who is more likely to miss the other first?",
        a: "Kandipaa naanu da mairuuuu ❤️😂"
    },
    {
        q: "What is one thing that reminds us of each other?",
        a: "Our last stayy togetherr i thinkkk ❤️"
    },
    {
        q: "What would our perfect day together look like?",
        a: "Sanda potuu nariaiyaa loveee pani ... apdiyeeee ❤️🥹"
    }
];

const memoryQuestions = [
    {
        q: "Our first conversation 💌",
        a: "Bayangaramaaa naaalll!! 😂\n\nV2la adiii vaangi thittuuu vangiii aiyaayeeoooo avlodhnn maja dhannn ❤️"
    },
    {
        q: "Our first meet 🥹",
        a: "Frndsss haa 10th la oreyyy roww benchhh.. loverss haaa naa...\n\nNaraiyaaa daa maa... adhelam... oru thaniii sugaam dhannndaaa enakuuuu unkitaa nraiyaaaa... irukuuu pesaa ❤️"
    },
    {
        q: "My favourite memory with you 💗",
        a: "Ellameyyy ❤️🥹"
    },
    {
        q: "A moment that made me smile",
        a: "Yourrrr unexpectedd kiss and hugs... unakyyyy theriyadhuuu oruuu maariii nallarkum.... enna sollaaa naanummm ❤️🥹"
    },
    {
        q: "A memory I never want to forget 📸",
        a: "Stepss incident ❤️\n\nFrst kiss — Nov 24 (vara podhuu markaamaaa vandhuu indha varushamumm... nerula vandutu poo ❤️)\n\nBikee — Jan 26 ❤️"
    }
];

const sectionIds = [
    "aboutMe",
    "aboutUs",
    "wishes",
    "quiz",
    "aboutYou",
    "memories"
];

let appData = loadData();
let currentSection = "";

function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        return saved
            ? JSON.parse(saved)
            : { answers: {}, completed: {} };
    } catch (error) {
        return { answers: {}, completed: {} };
    }
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageId === "dashboardPage") {
        updateDashboard();
    }
}

// LOGIN AND SCORE — ORIGINAL OPTIONS PRESERVED
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = [
        document.getElementById("login1").value,
        document.getElementById("login2").value,
        document.getElementById("login3").value,
        document.getElementById("login4").value
    ];

    const correctAnswers = [
        "November",
        "Our first meet",
        "Unga ooru side",
        "All of these"
    ];

    const correctCount = answers.filter((answer, index) => {
        return answer === correctAnswers[index];
    }).length;

    const message = document.getElementById("loginMessage");

    message.textContent = `Your score: ${correctCount}/4 💗`;

    if (correctCount === 4) {
        message.textContent += " All correct! Welcome to our world! 💕";

        setTimeout(() => {
            showPage("funnyPage");
        }, 1000);
    } else {
        message.textContent += " Try again! You can do it 💗";
    }
});

// QUESTION CARD — ONLY ONE ANSWER BOX
function makeQuestionCard(sectionId, question, index) {
    const card = document.createElement("div");
    card.className = "question-card";

    const title = document.createElement("h3");
    title.className = "question-title";
    title.textContent = `Q${index + 1}. ${question.q}`;

    const label = document.createElement("label");
    label.className = "answer-label my-label";
    label.textContent = "MY ANSWER 🩷";

    const answerBox = document.createElement("textarea");
    answerBox.className = "answer-box my-answer";
    answerBox.placeholder = "Text answer...";
    answerBox.id = `${sectionId}_answer_${index}`;

    const savedAnswer = appData.answers[`${sectionId}_${index}`];

    answerBox.value = savedAnswer !== undefined
        ? savedAnswer
        : question.a;

    card.appendChild(title);
    card.appendChild(label);
    card.appendChild(answerBox);

    return card;
}

function renderQuestions(containerId, sectionId, questions) {
    const container = document.getElementById(containerId);

    container.innerHTML = "";

    questions.forEach((question, index) => {
        container.appendChild(
            makeQuestionCard(sectionId, question, index)
        );
    });
}

function openSection(sectionId) {
    currentSection = sectionId;

    if (sectionId === "quiz") {
        renderQuestions("quizContainer", "quiz", quizQuestions);

        document.getElementById("quizMessage").textContent = "";
        showPage("quizPage");
        return;
    }

    if (sectionId === "memories") {
        renderQuestions("memoriesContainer", "memories", memoryQuestions);

        document.getElementById("memoriesMessage").textContent = "";
        showPage("memoriesPage");
        return;
    }

    const section = sections[sectionId];

    if (!section) return;

    document.getElementById("sectionTitle").textContent = section.title;

    document.getElementById("sectionDescription").textContent =
        section.description;

    document.getElementById("sectionMessage").textContent = "";

    renderQuestions("questionsContainer", sectionId, section.questions);

    showPage("sectionPage");
}

// SAVE ONE ANSWER PER QUESTION
function saveQuestionAnswers(sectionId, questions) {
    let allFilled = true;

    questions.forEach((question, index) => {
        const box = document.getElementById(
            `${sectionId}_answer_${index}`
        );

        if (!box) {
            allFilled = false;
            return;
        }

        const answer = box.value.trim();

        appData.answers[`${sectionId}_${index}`] = box.value;

        if (answer === "") {
            allFilled = false;
        }
    });

    appData.completed[sectionId] = allFilled;

    saveData();
    updateDashboard();

    return allFilled;
}

function saveSectionAnswers() {
    const section = sections[currentSection];

    if (!section) return;

    const allFilled = saveQuestionAnswers(
        currentSection,
        section.questions
    );

    document.getElementById("sectionMessage").textContent = allFilled
        ? "All answers saved! This section is completed 💗"
        : "Answers saved! Fill every answer box to complete this section 💕";
}

function saveQuizAnswers() {
    const allFilled = saveQuestionAnswers("quiz", quizQuestions);

    document.getElementById("quizMessage").textContent = allFilled
        ? "Quiz answers saved! Completed! 💗"
        : "Answers saved! Fill every answer box to complete the quiz 💕";
}

function saveMemories() {
    const allFilled = saveQuestionAnswers("memories", memoryQuestions);

    document.getElementById("memoriesMessage").textContent = allFilled
        ? "Your memories are saved! 💗"
        : "Memories saved! Fill every answer box to complete this section 💕";
}

// SIX BOXES AND PROGRESS
function updateDashboard() {
    let completedCount = 0;

    sectionIds.forEach(id => {
        const isComplete = appData.completed[id] === true;

        const status = document.getElementById(`status-${id}`);

        if (!status) return;

        if (isComplete) {
            completedCount++;

            status.textContent = "Completed ✓";
            status.style.background = "#e4fff0";
            status.style.color = "#27946a";
        } else {
            status.textContent = "Not completed";
            status.style.background = "#fff0f6";
            status.style.color = "#d94e88";
        }
    });

    document.getElementById("progressText").textContent =
        `${completedCount} / 6 sections completed`;

    document.getElementById("loveBox").classList.toggle(
        "hidden",
        completedCount !== 6
    );
}

function finishWebsite() {
    const allCompleted = sectionIds.every(
        id => appData.completed[id] === true
    );

    if (allCompleted) {
        showPage("finalPage");
    } else {
        alert("Complete all six sections first! 💗");
    }
}

updateDashboard();