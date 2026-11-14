import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eb7ul0t3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9A5.25 5.25 0 1 0 13 9A5.25 5.25 0 1 0 2.5 9m13.75-1.75a2.25 4.75 0 1 0 4.5 0a2.25 4.75 0 1 0-4.5 0M7.75 9h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="eb7ul0t3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sensor-tamper"} {...others} />);
}

export default Component;
