



const audioData = [ 
    {
        title: "The Stamp of Revival", 
        artist: "Pastor Obed Ekenechukwu",
        dateReleased: "2024-01-15",
        url: "https://github.com/phayvie/wcccfunibenaudio/raw/main/THE%20STAMP%20OF%20REVIVAL%20PASTOR%20OBED_15-01-24_21-20-19-279.m4a"
    },
    {
        title: "The Works of the Flesh", 
        artist: "Pastor Obinna Paul",
        dateReleased: "2024-01-19",
        url: "https://github.com/phayvie/wcccfunibenaudio/raw/main/THE%20WORKS%20OF%20THE%20FLESH%20PST%20OBINNA.m4a"
    },
    {
        title: "The Works of the Flesh (Strife, heresies and sedition)",
        artist: "Sis Kosi Biosamuanya",
        dateReleased: "2023-11-24",
        url:"https://github.com/phayvie/wcccfunibenaudio/raw/main/THE-WORKS-OF-THE-FLESH-%20(Strife,%20heresies%20and%20sedition)%20by%20Sis%20Kosi%20Biosamuanya2.mp3"
    },
    {
        title: "The Works of the Flesh (Variance and emulation)",
        artist: "Pastor Obinna Paul",
        dateReleased: "2023-11-17",
        url:"https://github.com/phayvie/wcccfunibenaudio/raw/main/THE%20WORKS%20OF%20THE%20FLESH%20PST%20OBINNA.m4a"
    },
    {
        title: "The Works of the Flesh (Idolatry)",
        artist: "Mama Ruth Fortunate",
        dateReleased: "2023-11-08",
        url:"https://github.com/phayvie/wcccfunibenaudio/raw/main/THE%20WORKS%20OF%20THE%20FLESH-MAMA%20RUTH.mp3"
    },
    {
        title: "The Concept of Prayer and Fasting",
        artist: "Pastor Obed Ekenechukwu",
        dateReased: "2024-01-21",
        url: "https://github.com/phayvie/wcccfunibenaudio/raw/main/The%20concept%20of%20prayer%20and%20fasting%20by%20Pastor%20Obed.m4a"
    }
    ,
    {
        title: "Who do you say that Christ is?",
        artist: "Pastor John",
        dateReleased: "2024-02-19",
        url:"https://github.com/phayvie/wcccfunibenaudio/raw/main/WHO%20%20DO%20YOU%20SAY%20THAT%20CHRIST%20IS%20-%20PST%20JOHN.m4a"
    },
    {
        title: "The Productive Believer",
        artist: "Pastor Bright",
        dateReleased: "2024-02-25",
        url:"https://github.com/phayvie/wcccfunibenaudio/raw/main/The%20Productive%20Believer%20by%20Pastor%20Bright.m4a"
    },{
        title: "new message",
        artist: "Pastor Bright",
        dateReleased: "2024-02-25",
        url:"https://github.com/phayvie/wcccfunibenaudio/raw/main/The%20Productive%20Believer%20by%20Pastor%20Bright.m4a"
    }
];


const audioOptionsDiv = document.getElementById('audioOptions');
const searchInput = document.getElementById('searchInput');

// Sort audioData by date in descending order
audioData.sort((a, b) => new Date(b.dateReleased) - new Date(a.dateReleased));

// Populate the div with audio titles, artists, and dateReleased
audioData.forEach(audio => {
    const optionText = `${audio.title} - ${audio.artist} (${audio.dateReleased})`;
    const audioOptionDiv = document.createElement('div');
    audioOptionDiv.className = 'audio-option';
    audioOptionDiv.textContent = optionText;
    audioOptionDiv.onclick = function () {
 
        playAudio(audio);
    };
    audioOptionsDiv.appendChild(audioOptionDiv);
});

 function filterAudios() {
const audioOptionsDiv = document.getElementById('audioOptions');
const searchInput = document.getElementById('searchInput').value.toLowerCase();

// Remove all existing audio options
audioOptionsDiv.innerHTML = '';

// Filter and add options based on the case-insensitive search input
const matchingAudios = audioData.filter(audio => {
const title = audio.title.toLowerCase();
const artist = audio.artist.toLowerCase();
return title.includes(searchInput) || artist.includes(searchInput);
});

if (matchingAudios.length > 0) {
matchingAudios.forEach(audio => {
    const optionText = `${audio.title} - ${audio.artist} (${audio.dateReleased})`;
    const audioOptionDiv = document.createElement('div');
    audioOptionDiv.className = 'audio-option';
    audioOptionDiv.textContent = optionText;
    audioOptionDiv.onclick = function () {
        playAudio(audio);
    };
    audioOptionsDiv.appendChild(audioOptionDiv);
});
} else {
// Display a message when no matches are found
const noMatchMessage = document.createElement('div');
noMatchMessage.className = 'no-match-message';
noMatchMessage.textContent = 'No matching audio found.';
audioOptionsDiv.appendChild(noMatchMessage);
}
}

function playAudio(selectedAudio) {
const audioPlayer = document.getElementById('audioPlayer');
const selectedSongTitle = document.getElementById('selectedSongTitle');
const selectedArtist = document.getElementById('selectedArtist');
const audioInfo = document.getElementById('audioInfo');
const userConfirmed = confirm("Click 'OK' to play the audio.");

// If the user clicks 'OK', initiate the audio playback
if (userConfirmed) {
// Set the source only once
audioPlayer.src = selectedAudio.url;

// Update the information in the container
selectedSongTitle.innerHTML = `<div style="margin:0.3rem; font-weight:bold;">NOW PLAYING</div> <p>TITLE: ${selectedAudio.title}</p>`;
selectedArtist.textContent = `MINISTER: ${selectedAudio.artist}`;
audioInfo.style.backgroundColor = '#74a4cb';
audioInfo.style.padding = "0.5rem";
audioInfo.style.width = "100%";

// Start playing the audio
console.log("play")
audioPlayer.play();
} else {
// Handle the case when the user clicks 'Cancel' or closes the alert
console.log("User canceled the audio playback.");
}
}
