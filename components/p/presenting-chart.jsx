import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_w6alx1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21v-3.5c0-3 2-5 4.5-5c1.5 0 2.5.5 3.25 1.25L13 10M4 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0m10 1.75l6.5-6.25m-5.25 19v-3m2.75 3v-7m2.75 7V17");
}
</style><path class="l_w6alx1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:presenting-chart"} {...others} />);
}

export default Component;
