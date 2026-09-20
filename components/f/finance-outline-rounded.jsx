import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a629wsu5n {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V4q0-.425.288-.712T4 3t.713.288T5 4v15h15q.425 0 .713.288T21 20t-.288.713T20 21zm2-3q-.425 0-.712-.288T6 17v-7q0-.425.288-.712T7 9h2q.425 0 .713.288T10 10v7q0 .425-.288.713T9 18zm5 0q-.425 0-.712-.288T11 17V5q0-.425.288-.712T12 4h2q.425 0 .713.288T15 5v12q0 .425-.288.713T14 18zm5 0q-.425 0-.712-.288T16 17v-3q0-.425.288-.712T17 13h2q.425 0 .713.288T20 14v3q0 .425-.288.713T19 18z");
}
</style><path class="a629wsu5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:finance-outline-rounded"} {...others} />);
}

export default Component;
