


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const speechRec = document.querySelector('.speech-recognition');
const button = document.querySelector('.btn');

let words = document.querySelector('.words');

const recognition = new SpeechRecognition;
recognition.interimResults = true;
recognition.lang = 'es-mx';


const enableVoiceToText = () =>{
    recognition.start()
}

const voiceToText = (e) =>{
    const toText = Array.from(e.results)
    .map(result => result[0]).map(result => result.transcript).join('')

    words.textContent = toText;

    if(e.results[0].isFinal){
        words = document.createElement('p');

        speechRec.appendChild(words)
    }
}

recognition.addEventListener('result', voiceToText);
button.addEventListener('click', enableVoiceToText);
recognition.addEventListener('end', recognition.start);