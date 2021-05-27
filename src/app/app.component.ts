import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data: SimpleDataModel[] = [
    {
      name: 'text1',
      value: '60'
    },
    {
      name: 'text2',
      value: '25'
    },
    {
      name: 'text3',
      value: '15'
    }
  ];
}

export interface SimpleDataModel {
  name: string;
  value: string;
  color?: string;
}
