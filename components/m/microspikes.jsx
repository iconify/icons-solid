import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.of35ep9pn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15.5V4h6v5.5l6.5 1.5c2.25.5 3.5 2 3.5 4.5Zm.5 0L6 19l1.5-3.5L9 19l1.5-3.5L12 19l1.5-3.5L15 19l1.5-3.5L18 19l1.5-3.5M15 10.75l-1.5 4.75");
}
</style><path class="of35ep9pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:microspikes"} {...others} />);
}

export default Component;
