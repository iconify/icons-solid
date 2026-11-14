import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gn-drxb1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.125 3h1.75A6.125 6.125 0 0 1 19 9.125v2.25a6.125 6.125 0 0 1-6.125 6.125h-1.75A6.125 6.125 0 0 1 5 11.375v-2.25A6.125 6.125 0 0 1 11.125 3M5 10h14m-9-4h4m-5.5 7.75h.01m6.99 0h.01M7.5 17.5L5 21m11.5-3.5L19 21");
}
</style><path class="gn-drxb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:commuter-benefit"} {...others} />);
}

export default Component;
