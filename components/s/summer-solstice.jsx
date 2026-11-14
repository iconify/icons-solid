import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zfc6njb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 12.25a4.75 4.75 0 0 1 9.5 0m-13.25 0h15.4m.2 0h3.4m-10.5-7v-2m-5 4L4.75 6M16 7.25L17.25 6M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="zfc6njb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:summer-solstice"} {...others} />);
}

export default Component;
