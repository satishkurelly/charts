import { Component } from '@angular/core';

const gettingStarted = require('html-loader!markdown-loader!../getting-started.md');

@Component({
  selector: 'app',
  template: `
  <demo-header>Loading header</demo-header>

  <div class="container">
    <section id="getting-started" [innerHtml]="gettingStarted"></section>



    <charts-section class="col-md-12"></charts-section>
    
    
  </div>


  `
})
export class AppComponent {
  public gettingStarted: string = gettingStarted;
  public ngAfterContentInit(): any {
    setTimeout(()=>{
      if (typeof PR !== 'undefined') {
        // google code-prettify
        PR.prettyPrint();
      }
    }, 150);
  }
}
