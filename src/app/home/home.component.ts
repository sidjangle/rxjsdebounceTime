import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
searchtxt = new FormControl('')
arraydata = [{'name':'rocky'},{'name':'ranbir'},{'name':'codetodo'}]
temparray:any = this.arraydata;
  constructor() { 


  }

  ngOnInit(): void {

    this.searchtxt.valueChanges.pipe(debounceTime(500)).subscribe(res=>{
      this.arraydata = this.temparray.filter((e:any)=> e.name.includes(res));
console.log(res)
    })
  }

}
