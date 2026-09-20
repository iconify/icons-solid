import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6lv3fcsp {
  fill: currentColor;
  d: path("M8 22q-.425 0-.712-.288T7 21t.288-.712T8 20t.713.288T9 21t-.288.713T8 22m4 0q-.425 0-.712-.288T11 21t.288-.712T12 20t.713.288T13 21t-.288.713T12 22m4 0q-.425 0-.712-.288T15 21t.288-.712T16 20t.713.288T17 21t-.288.713T16 22m-8-4v-3h-.15q-.8 0-1.375-.525t-.625-1.3L5 3h2.45q1.125 0 1.95.7t1.025 1.8L11 9h4q1.65 0 2.825 1.175T19 13v2h-2v3h-2v-3h-5v3z");
}
</style><path class="h6lv3fcsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:settings-seating-sharp"} {...others} />);
}

export default Component;
