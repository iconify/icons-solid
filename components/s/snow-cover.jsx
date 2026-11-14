import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eijdnga2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5v-2C3 9 6 7 9 7.5c2 .25 3 1 4.5 1c2.5 0 4-1.5 6-.5c1.5.75 1.5 2.5 1.5 3.5v2m-18.5 0h19M6 17.5h12");
}
</style><path class="eijdnga2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:snow-cover"} {...others} />);
}

export default Component;
