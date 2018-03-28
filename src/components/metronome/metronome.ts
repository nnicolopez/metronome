import { Component } from '@angular/core';
import {Vibration} from "@ionic-native/vibration";


@Component({
  selector: 'metronome',
  templateUrl: 'metronome.html'
})
export class MetronomeComponent {
  bpm: number = 60;
  minute: number = 60000;
  is_playing = false;
  interval;

  metronomeBegin() {
    if (!this.is_playing) {
      this.metronome(this.minute / this.bpm);
      this.is_playing = !this.is_playing;
    }
  }

  metronomeStop() {
    if (this.is_playing) {
      clearInterval(this.interval);
      this.is_playing = !this.is_playing;
    }
  }

  onChange() {
    if (this.is_playing) {
      clearInterval(this.interval);
      this.metronome(this.minute / this.bpm);
    }
  }

  metronome(rate) {
    this.interval = setInterval(()=>{
      console.log(Date.now());
      this.vibration.vibrate(100);
    }, rate);
  }

  constructor(private vibration: Vibration) {
  }

}
