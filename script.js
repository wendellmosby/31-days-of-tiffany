const birthday = new Date("2026-11-01T00:00:00-05:00");
const celebrationStart = new Date("2026-10-01T00:00:00-05:00");
const totalDays = 31;

const messages = [
  "The countdown to 50 begins. May every day this month remind you how deeply you are loved.",
  "Your presence makes ordinary moments feel special.",
  "You are beautiful, brilliant, and becoming more radiant with every year.",
  "Thank you for the care you pour into our family.",
  "Your strength has carried more than most people will ever know.",
  "You deserve rest, joy, softness, and celebration.",
  "One week closer to fifty—and your best chapters are still being written.",
  "Your creativity turns ideas into something the world can hold.",
  "You make love visible through the things you do every day.",
  "May this next decade return every bit of goodness you have given.",
  "Your courage inspires the people fortunate enough to know you.",
  "You have built a life filled with meaning, purpose, and love.",
  "Even on demanding days, your light remains unmistakable.",
  "You are allowed to pause and enjoy everything you have become.",
  "Halfway to your birthday, but there is no halfway in the way you are loved.",
  "Your wisdom, warmth, and wit make you unforgettable.",
  "Thank you for believing in possibilities before everyone else can see them.",
  "You are the heartbeat of so many beautiful memories.",
  "Fifty is not a finish line. It is a new level of freedom.",
  "Your story continues to make room for other people to find hope.",
  "You deserve to be celebrated for who you are—not only for what you do.",
  "There is grace in your journey and power in your presence.",
  "The love you give has shaped our family in lasting ways.",
  "May your next chapter be filled with peace, abundance, and adventure.",
  "Your smile still changes the atmosphere.",
  "You have made fifty years look meaningful, beautiful, and bold.",
  "Five days away—and the celebration is only getting started.",
  "Our family is stronger because of your love and devotion.",
  "The world received a gift the day you were born.",
  "Tomorrow, we celebrate fifty years of an extraordinary woman.",
  "Happy birthday eve. Your next beautiful chapter begins now."
];

function pad(value) { return String(value).padStart(2, "0"); }

function updateCountdown() {
  const now = new Date();
  const remaining = birthday - now;

  if (remaining <= 0) {
    document.querySelector(".countdown").innerHTML = '<div class="time-card birthday-card"><strong>50</strong><span>Happy Birthday, Tiffany!</span></div>';
    document.getElementById("day-label").textContent = "The celebration is here";
    document.getElementById("progress-bar").style.width = "100%";
    document.getElementById("message-day").textContent = "November 1";
    document.getElementById("daily-message").textContent = "Happy 50th birthday, Tiffany. Today we celebrate your life, your love, and everything that makes you extraordinary.";
    return;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);

  const rawDay = Math.floor((now - celebrationStart) / 86400000) + 1;
  const day = Math.max(1, Math.min(totalDays, rawDay));
  const started = now >= celebrationStart;
  document.getElementById("day-label").textContent = started ? `Day ${day} of 31` : "The celebration begins October 1";
  document.getElementById("progress-bar").style.width = `${started ? (day / totalDays) * 100 : 0}%`;
  document.getElementById("message-day").textContent = `Day ${day}`;
  document.getElementById("daily-message").textContent = messages[day - 1];
}

updateCountdown();
setInterval(updateCountdown, 1000);
