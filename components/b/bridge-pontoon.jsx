import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ytveyd-xf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19m-19 0V10A2.25 2.25 0 0 0 7 10V6.5m2.75 0V10a2.25 2.25 0 0 0 4.5 0V6.5m2.75 0V10a2.25 2.25 0 0 0 4.5 0V6.5m-19 9.25q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="ytveyd-xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bridge-pontoon"} {...others} />);
}

export default Component;
