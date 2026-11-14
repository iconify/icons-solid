import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bslxdbb9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14L13.5 7v2.5h-3V7Zm0 9.75l2.5 2.25c-1.5 2.5-1.5 7 1 7h7c2.5 0 2.5-4.5 1-7l2.5-2.25m-7 0v3.25");
}
</style><path class="bslxdbb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bagging-machine"} {...others} />);
}

export default Component;
