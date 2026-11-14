import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fj-1avdyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.672 15.439l1.767-1.767a2.75 2.75 0 0 1 3.889 0a2.75 2.75 0 0 1 0 3.889l-1.767 1.767a2.75 2.75 0 0 1-3.889 0a2.75 2.75 0 0 1 0-3.889m9-9l1.767-1.767a2.75 2.75 0 0 1 3.889 0a2.75 2.75 0 0 1 0 3.889l-1.767 1.767a2.75 2.75 0 0 1-3.889 0a2.75 2.75 0 0 1 0-3.889M8 8l2.25 2.25M18 14.5V18m0 3h.01");
}
</style><path class="fj-1avdyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:exception"} {...others} />);
}

export default Component;
