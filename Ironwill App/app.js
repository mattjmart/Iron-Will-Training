// Exercise data for Months 1-3 with image URLs for Day 1 of Month 1
const exercises = {
    month1: {
        day1: [
            { name: "Flat Machine Chest Press", sets: 4, reps: "6-9", rest: 60, videoId: "s3G8G3u2B5c", imageUrl: "https://images.unsplash.com/photo-1605296866985-34b3f90de6a8?q=80&w=1470&auto=format&fit=crop" },
            { name: "Machine Pec Fly", sets: 3, reps: "10-12/15-20", rest: 60, videoId: "iH1hBDZQyew", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop" },
            { name: "DB Lateral Raise", sets: 3, reps: "8-12/8-12/12-15", rest: 60, videoId: "3VcKaXpzqRo", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e0e?q=80&w=1470&auto=format&fit=crop" },
            { name: "Tricep Pushdown", sets: 3, reps: "6-9/6-9/10-12", rest: 60, videoId: "0dggM7HY8iI", imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470&auto=format&fit=crop" },
            { name: "Skull Crusher", sets: 3, reps: "10-12/10-12/15-20", rest: 60, videoId: "d_KZxkY_0LE", imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1470&auto=format&fit=crop" },
            { name: "Decline Knee Raises (Optional)", sets: 3, reps: "8-12", rest: 60, videoId: "iP2fjvGsfuY", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop" }
        ],
        day2: [
            { name: "Neutral Grip Lat Pulldown", sets: 3, reps: "6-9/10-12", rest: 60, videoId: "placeholder2", imageUrl: "placeholder_image_url" },
            { name: "T-Bar Row", sets: 3, reps: "8-12", rest: 60, videoId: "placeholder3", imageUrl: "placeholder_image_url" },
            { name: "Machine Rear Delt Fly", sets: 3, reps: "8-12/8-12/12-15", rest: 60, videoId: "placeholder4", imageUrl: "placeholder_image_url" },
            { name: "Face Away Cable Curls", sets: 3, reps: "6-9/6-9/10-12", rest: 60, videoId: "placeholder5", imageUrl: "placeholder_image_url" },
            { name: "Rope Hammer Curl", sets: 3, reps: "10-12/10-12/15-20", rest: 60, videoId: "placeholder6", imageUrl: "placeholder_image_url" },
            { name: "Hanging Leg/Knee Raises (Optional)", sets: 3, reps: "12-15", rest: 60, videoId: "placeholder7", imageUrl: "placeholder_image_url" }
        ],
        day3: [
            { name: "Smith Squat", sets: 4, reps: "6-9", rest: 60, videoId: "placeholder8", imageUrl: "placeholder_image_url" },
            { name: "Vertical Quad Focus Leg Press", sets: 4, reps: "6-9", rest: 60, videoId: "placeholder9", imageUrl: "placeholder_image_url" },
            { name: "Leg Extensions", sets: 3, reps: "8-12/12-15", rest: 60, videoId: "placeholder10", imageUrl: "placeholder_image_url" },
            { name: "Romanian Deadlift", sets: 4, reps: "6-9", rest: 60, videoId: "placeholder11", imageUrl: "placeholder_image_url" },
            { name: "Bent Leg Calf Raise", sets: 3, reps: "8-12", rest: 60, videoId: "placeholder12", imageUrl: "placeholder_image_url" }
        ],
        day4: [
            { name: "Seated Hamstring Curl", sets: 3, reps: "8-12/12-15", rest: 60, videoId: "placeholder13", imageUrl: "placeholder_image_url" },
            { name: "Romanian Deadlift", sets: 4, reps: "6-9", rest: 60, videoId: "placeholder11", imageUrl: "placeholder_image_url" },
            { name: "Bent Leg Calf Raise", sets: 3, reps: "8-12", rest: 60, videoId: "placeholder12", imageUrl: "placeholder_image_url" },
            { name: "Hanging Leg/Knee Raises (Optional)", sets: 3, reps: "12-15", rest: 60, videoId: "placeholder7", imageUrl: "placeholder_image_url" },
            { name: "Decline Knee Raises (Optional)", sets: 3, reps: "8-12", rest: 60, videoId: "EfGhIjKlMnO", imageUrl: "placeholder_image_url" }
        ]
    },
    month2: {
        day1: [
            { name: "Incline DB Press", sets: 4, reps: "8-10", rest: 45, videoId: "placeholder14", imageUrl: "placeholder_image_url" },
            { name: "Cable Chest Fly", sets: 3, reps: "12-15", rest: 45, videoId: "placeholder15", imageUrl: "placeholder_image_url" },
            { name: "DB Lateral Raise", sets: 3, reps: "10-12/10-12/12-15", rest: 45, videoId: "xYzAbCdEfGh", imageUrl: "placeholder_image_url" },
            { name: "Tricep Pushdown", sets: 3, reps: "8-10/8-10/10-12", rest: 45, videoId: "iJkLmNoPqRs", imageUrl: "placeholder_image_url" },
            { name: "Overhead Tricep Extension", sets: 3, reps: "10-12/10-12/12-15", rest: 45, videoId: "placeholder16", imageUrl: "placeholder_image_url" },
            { name: "Hanging Leg Raises (Optional)", sets: 3, reps: "10-12", rest: 45, videoId: "placeholder7", imageUrl: "placeholder_image_url" }
        ],
        day2: [
            { name: "Wide Grip Lat Pulldown", sets: 3, reps: "8-10/8-10/10-12", rest: 45, videoId: "placeholder17", imageUrl: "placeholder_image_url" },
            { name: "Barbell Bent-Over Row", sets: 3, reps: "8-10", rest: 45, videoId: "placeholder18", imageUrl: "placeholder_image_url" },
            { name: "Cable Rear Delt Fly", sets: 3, reps: "10-12/10-12/12-15", rest: 45, videoId: "placeholder19", imageUrl: "placeholder_image_url" },
            { name: "Cable Curls", sets: 3, reps: "8-10/8-10/10-12", rest: 45, videoId: "placeholder20", imageUrl: "placeholder_image_url" },
            { name: "Incline DB Curl", sets: 3, reps: "10-12/10-12/12-15", rest: 45, videoId: "placeholder21", imageUrl: "placeholder_image_url" },
            { name: "Decline Knee Raises (Optional)", sets: 3, reps: "10-12", rest: 45, videoId: "EfGhIjKlMnO", imageUrl: "placeholder_image_url" }
        ],
        day3: [
            { name: "Barbell Back Squat", sets: 4, reps: "8-10", rest: 45, videoId: "placeholder22", imageUrl: "placeholder_image_url" },
            { name: "Hack Squat", sets: 4, reps: "8-10", rest: 45, videoId: "placeholder23", imageUrl: "placeholder_image_url" },
            { name: "Walking Lunges", sets: 3, reps: "10-12/10-12/12-15", rest: 45, videoId: "placeholder24", imageUrl: "placeholder_image_url" },
            { name: "Barbell Romanian Deadlift", sets: 4, reps: "8-10", rest: 45, videoId: "placeholder11", imageUrl: "placeholder_image_url" },
            { name: "Standing Calf Raise", sets: 3, reps: "10-12/10-12/12-15", rest: 45, videoId: "placeholder25", imageUrl: "placeholder_image_url" }
        ],
        day4: [
            { name: "Lying Hamstring Curl", sets: 3, reps: "10-12/10-12/12-15", rest: 45, videoId: "placeholder26", imageUrl: "placeholder_image_url" },
            { name: "Barbell Hip Thrust", sets: 4, reps: "8-10", rest: 45, videoId: "placeholder27", imageUrl: "placeholder_image_url" },
            { name: "Single-Leg Romanian Deadlift", sets: 3, reps: "10-12 per leg", rest: 45, videoId: "placeholder28", imageUrl: "placeholder_image_url" },
            { name: "Standing Calf Raise", sets: 3, reps: "10-12/10-12/12-15", rest: 45, videoId: "placeholder25", imageUrl: "placeholder_image_url" },
            { name: "Hanging Leg Raises", sets: 3, reps: "10-12", rest: 45, videoId: "placeholder7", imageUrl: "placeholder_image_url" },
            { name: "Decline Knee Raises", sets: 3, reps: "10-12", rest: 45, videoId: "EfGhIjKlMnO", imageUrl: "placeholder_image_url" }
        ]
    },
    month3: {
        day1: [
            { name: "Incline Barbell Press", sets: 4, reps: "10-12", rest: 30, videoId: "placeholder29", imageUrl: "placeholder_image_url" },
            { name: "Dumbbell Chest Fly", sets: 3, reps: "15-20", rest: 30, videoId: "placeholder30", imageUrl: "placeholder_image_url" },
            { name: "Seated DB Shoulder Press", sets: 3, reps: "12-15", rest: 30, videoId: "placeholder31", imageUrl: "placeholder_image_url" },
            { name: "Tricep Dips (Machine or Bench)", sets: 3, reps: "12-15", rest: 30, videoId: "placeholder32", imageUrl: "placeholder_image_url" },
            { name: "Cable Overhead Tricep Extension", sets: 3, reps: "15-20", rest: 30, videoId: "placeholder16", imageUrl: "placeholder_image_url" },
            { name: "Plank with Shoulder Taps (Optional)", sets: 3, reps: "30-45 sec", rest: 30, videoId: "placeholder33", imageUrl: "placeholder_image_url" }
        ],
        day2: [
            { name: "Close Grip Lat Pulldown", sets: 3, reps: "10-12/10-12/12-15", rest: 30, videoId: "placeholder34", imageUrl: "placeholder_image_url" },
            { name: "Dumbbell Row (Single Arm)", sets: 3, reps: "12-15 per arm", rest: 30, videoId: "placeholder35", imageUrl: "placeholder_image_url" },
            { name: "Face Pull (Cable)", sets: 3, reps: "15-20", rest: 30, videoId: "placeholder36", imageUrl: "placeholder_image_url" },
            { name: "EZ Bar Curl", sets: 3, reps: "12-15", rest: 30, videoId: "placeholder37", imageUrl: "placeholder_image_url" },
            { name: "Concentration Curl", sets: 3, reps: "15-20", rest: 30, videoId: "placeholder38", imageUrl: "placeholder_image_url" },
            { name: "Plank with Shoulder Taps (Optional)", sets: 3, reps: "30-45 sec", rest: 30, videoId: "placeholder33", imageUrl: "placeholder_image_url" }
        ],
        day3: [
            { name: "Front Squat", sets: 4, reps: "10-12", rest: 30, videoId: "placeholder39", imageUrl: "placeholder_image_url" },
            { name: "Leg Press (Feet High)", sets: 4, reps: "12-15", rest: 30, videoId: "placeholder40", imageUrl: "placeholder_image_url" },
            { name: "Goblet Squat", sets: 3, reps: "15-20", rest: 30, videoId: "placeholder41", imageUrl: "placeholder_image_url" },
            { name: "Dumbbell Romanian Deadlift", sets: 4, reps: "10-12", rest: 30, videoId: "placeholder11", imageUrl: "placeholder_image_url" },
            { name: "Seated Calf Raise", sets: 3, reps: "15-20", rest: 30, videoId: "placeholder42", imageUrl: "placeholder_image_url" }
        ],
        day4: [
            { name: "Lying Hamstring Curl", sets: 3, reps: "15-20", rest: 30, videoId: "placeholder26", imageUrl: "placeholder_image_url" },
            { name: "Barbell Hip Thrust", sets: 4, reps: "10-12", rest: 30, videoId: "placeholder27", imageUrl: "placeholder_image_url" },
            { name: "Single-Leg Glute Bridge", sets: 3, reps: "12-15 per leg", rest: 30, videoId: "placeholder43", imageUrl: "placeholder_image_url" },
            { name: "Seated Calf Raise", sets: 3, reps: "15-20", rest: 30, videoId: "placeholder42", imageUrl: "placeholder_image_url" },
            { name: "Plank with Shoulder Taps", sets: 3, reps: "30-45 sec", rest: 30, videoId: "placeholder33", imageUrl: "placeholder_image_url" },
            { name: "Russian Twists (Weighted)", sets: 3, reps: "15-20 per side", rest: 30, videoId: "placeholder44", imageUrl: "placeholder_image_url" }
        ]
    }
};

// Track the current set for each exercise independently
let currentSets = {};
let timerIntervals = {};
let timerPaused = {};
let timeLeft = {};
let workoutData = JSON.parse(localStorage.getItem("workoutData")) || {};
let chartInstance;

// Initialize chart
function initializeChart() {
    const ctx = document.getElementById("progressChart").getContext("2d");
    chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    label: "Reps",
                    data: [],
                    borderColor: "rgba(75, 192, 192, 1)",
                    fill: false
                },
                {
                    label: "Weight (lbs)",
                    data: [],
                    borderColor: "rgba(255, 99, 132, 1)",
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function loadExercises() {
    const month = document.getElementById("monthSelect").value;
    const week = document.getElementById("weekSelect").value;
    const day = document.getElementById("daySelect").value;
    const exerciseList = document.getElementById("exerciseList");
    exerciseList.innerHTML = "";

    // Initialize currentSets for each exercise if not already set
    exercises[month][day].forEach((exercise, index) => {
        const key = `${month}-${day}-${index}`;
        if (!currentSets[key]) {
            currentSets[key] = 1;
        }
    });

    // Display the day heading and list of exercises with links
    const dayNames = {
        day1: "Day 1: Push",
        day2: "Day 2: Pull",
        day3: "Day 3: Legs (Quads/Glutes)",
        day4: "Day 4: Legs (Hamstrings/Glutes)"
    };
    let exerciseLinks = exercises[month][day].map((exercise, index) => {
        return `<li><a href="#exercise-${month}-${day}-${index}">${exercise.name}</a></li>`;
    }).join("");

    exerciseList.innerHTML = `
        <h2>${dayNames[day]}</h2>
        <div class="exercise-list">
            <h4>Exercises:</h4>
            <ul>${exerciseLinks}</ul>
        </div>
    `;

    // Display all exercises
    exercises[month][day].forEach((exercise, index) => {
        displayExercise(month, day, index);
    });

    updateChart(month, week, day);
}

function displayExercise(month, day, index) {
    const exerciseList = document.getElementById("exerciseList");
    const exercise = exercises[month][day][index];
    const key = `${month}-${day}-${index}`;
    const currentSet = currentSets[key];

    let setsHtml = "";
    for (let i = 1; i <= exercise.sets; i++) {
        setsHtml += `
            <div class="set-input">
                <label>Set ${i}:</label>
                <input type="number" id="reps-${month}-${day}-${index}-${i}" placeholder="Reps" min="1">
                <input type="number" id="weight-${month}-${day}-${index}-${i}" placeholder="Weight (lbs)" min="0">
            </div>
        `;
    }

    exerciseList.innerHTML += `
        <div class="exercise-card" id="exercise-${month}-${day}-${index}">
            <h3>${exercise.name}</h3>
            <p>Sets: ${exercise.sets}, Reps: ${exercise.reps}</p>
            <div>${setsHtml}</div>
            <button class="btn btn-primary mt-3" onclick="completeSet('${month}', '${day}', ${index})">Complete Set</button>
            <button class="btn btn-secondary mt-3 mx-2" onclick="pauseTimer('${key}')">Pause Timer</button>
            <button class="btn btn-secondary mt-3" onclick="skipSet('${month}', '${day}', ${index})">Skip to Next Set</button>
            <div id="timer-${key}" class="timer mt-3"></div>
        </div>
    `;
}

function completeSet(month, day, index) {
    const exercise = exercises[month][day][index];
    const key = `${month}-${day}-${index}`;
    let currentSet = currentSets[key];

    if (currentSet <= exercise.sets) {
        // Log the set data
        const reps = document.getElementById(`reps-${month}-${day}-${index}-${currentSet}`).value || 0;
        const weight = document.getElementById(`weight-${month}-${day}-${index}-${currentSet}`).value || 0;

        // Save to localStorage with week
        const week = document.getElementById("weekSelect").value;
        const date = new Date().toISOString().split("T")[0];
        if (!workoutData[date]) workoutData[date] = {};
        if (!workoutData[date][month]) workoutData[date][month] = {};
        if (!workoutData[date][month][week]) workoutData[date][month][week] = {};
        if (!workoutData[date][month][week][day]) workoutData[date][month][week][day] = {};
        if (!workoutData[date][month][week][day][exercise.name]) workoutData[date][month][week][day][exercise.name] = [];
        workoutData[date][month][week][day][exercise.name].push({ set: currentSet, reps: parseInt(reps), weight: parseInt(weight) });
        localStorage.setItem("workoutData", JSON.stringify(workoutData));

        // Start rest timer
        startRestTimer(exercise.rest, key);
        currentSets[key]++;
        updateChart(month, week, day);
    } else {
        // Reset the sets for this exercise if all sets are complete
        currentSets[key] = 1;
        displayExercise(month, day, index);
    }
}

function startRestTimer(seconds, key) {
    const timerDisplay = document.getElementById(`timer-${key}`);
    const alertSound = document.getElementById("restAlert");
    timeLeft[key] = seconds;
    timerDisplay.textContent = `Rest: ${timeLeft[key]}s`;

    clearInterval(timerIntervals[key]);
    timerIntervals[key] = setInterval(() => {
        if (!timerPaused[key]) {
            timeLeft[key]--;
            timerDisplay.textContent = `Rest: ${timeLeft[key]}s`;
            if (timeLeft[key] <= 0) {
                clearInterval(timerIntervals[key]);
                timerDisplay.textContent = "";
                alertSound.play().catch(err => console.log("Audio playback failed:", err));
            }
        }
    }, 1000);
}

function pauseTimer(key) {
    timerPaused[key] = !timerPaused[key];
    const timerDisplay = document.getElementById(`timer-${key}`);
    if (timerPaused[key]) {
        timerDisplay.textContent = `Paused: ${timeLeft[key]}s`;
    } else {
        timerDisplay.textContent = `Rest: ${timeLeft[key]}s`;
    }
}

function skipSet(month, day, index) {
    const key = `${month}-${day}-${index}`;
    clearInterval(timerIntervals[key]);
    const timerDisplay = document.getElementById(`timer-${key}`);
    timerDisplay.textContent = "";
    timerPaused[key] = false;

    const exercise = exercises[month][day][index];
    if (currentSets[key] <= exercise.sets) {
        currentSets[key]++;
    } else {
        currentSets[key] = 1;
    }
    displayExercise(month, day, index);
}

function updateChart(month, week, day) {
    const dates = Object.keys(workoutData).sort();
    const repsData = [];
    const weightData = [];
    const labels = [];

    // Show progress for the first exercise of the selected day
    const exerciseName = exercises[month][day][0]?.name;
    if (!exerciseName) return;

    dates.forEach(date => {
        const dayData = workoutData[date][month]?.[week]?.[day]?.[exerciseName];
        if (dayData) {
            const avgReps = dayData.reduce((sum, set) => sum + set.reps, 0) / dayData.length;
            const avgWeight = dayData.reduce((sum, set) => sum + set.weight, 0) / dayData.length;
            labels.push(date);
            repsData.push(avgReps);
            weightData.push(avgWeight);
        }
    });

    chartInstance.data.labels = labels;
    chartInstance.data.datasets[0].data = repsData;
    chartInstance.data.datasets[1].data = weightData;
    chartInstance.update();
}

// Initialize on page load
window.onload = () => {
    initializeChart();
    loadExercises();
};