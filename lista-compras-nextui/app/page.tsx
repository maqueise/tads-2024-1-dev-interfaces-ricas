'use client'
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [list,setList] = useState<string[]>([])
  function handleAddItem(formData:FormData) {
    let newList = new Array()
    newList.push(formData.get('item'))
    setList([...list,...newList])
    console.log(list)
  }
  return (
    <>
      <header className="w-full">
        <h1>Lista de Compras</h1>
      </header>
      <section className="py-4">
        <form action={handleAddItem} className="flex items-center gap-2">
          <Input  name="item" label="Adicione um novo item" size="sm" />
          <Button type="submit" color="primary">Adicionar Item</Button>
        </form>
      </section>
      <section>
        <Listbox>
          <ListboxItem
            endContent={<Button isIconOnly color="danger" variant="light"><Trash2 size={16} /></Button>}>Item da Lista 1</ListboxItem>

        </Listbox>
      </section>
    </>
  )
}
