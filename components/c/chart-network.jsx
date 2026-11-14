import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f58ikt7qk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 12.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-5.5-7a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m12-.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M3.25 18.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m13 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M7.5 7.25l2.75 3.25m6.25-3.75l-2.75 3.5m-3.75 4L7.25 17M14 14.25L16.75 17");
}
</style><path class="f58ikt7qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-network"} {...others} />);
}

export default Component;
