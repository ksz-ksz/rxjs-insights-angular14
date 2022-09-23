import { Component } from '@angular/core';
import { inspect } from '@rxjs-insights/devtools';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$ = inspect(interval(1000).pipe(map(x => x*x)));
}
