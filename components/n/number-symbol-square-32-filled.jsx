import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.mtj1alr2n {
  fill: currentColor;
  d: path("m13.855 18l.833-4h3.457l-.833 4zM7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zm7.979 7.204L15.105 12h3.457l.459-2.204a1 1 0 0 1 1.958.408L20.605 12H22a1 1 0 1 1 0 2h-1.812l-.833 4H21a1 1 0 1 1 0 2h-2.062l-.459 2.204a1 1 0 0 1-1.958-.408L16.895 20h-3.457l-.459 2.204a1 1 0 0 1-1.958-.408L11.395 20H10a1 1 0 1 1 0-2h1.812l.833-4H11a1 1 0 1 1 0-2h2.062l.459-2.204a1 1 0 0 1 1.958.408");
}
</style><path class="mtj1alr2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:number-symbol-square-32-filled"} {...others} />);
}

export default Component;
