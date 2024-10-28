import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputprops = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
};

function FormInput({ label, name, type, defaultValue }: FormInputprops) {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
}
export default FormInput;
