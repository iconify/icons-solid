import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjkpwtbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 18.5c5.5 0 4.5-13 10-13m-11 12za1.414 1.414 0 0 1 0 2a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 1 0-2a1.414 1.414 0 0 1 2 0m14-13za1.414 1.414 0 0 1 0 2a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 1 0-2a1.414 1.414 0 0 1 2 0");
}
</style><path class="hjkpwtbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:animation-curve"} {...others} />);
}

export default Component;
