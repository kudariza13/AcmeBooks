import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'acmebooks';
  public cards:Array<any> = []
  constructor(private RestService:RestService){}

  ngOnInit(): void {
   this.cards = [
     {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
     },
     {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
     },
     {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
     },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      },
      {
        bookName:'Book Name',
        bookPrice:'15.50',
        bookAuthor:'Author',
        bookLanguage:'EN',
        bookImg: '../../assets/img/cat1.png'
      }
   ]
  }

}

