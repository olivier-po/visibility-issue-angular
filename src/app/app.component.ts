import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {

  }

  test() {
    console.log("test button clicked");
  }
}
