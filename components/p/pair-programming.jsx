import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nfyk73buw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M2.5 13.5c0-2.5 1.75-3.75 4-3.75s4 1.25 4 3.75M15 5.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-1.5 8.25c0-2.5 1.75-3.75 4-3.75s4 1.25 4 3.75M8 16.5L5 19l3 2.5m5.25-5.25l-2.5 5.5M16 16.5l3 2.5l-3 2.5");
}
</style><path class="nfyk73buw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pair-programming"} {...others} />);
}

export default Component;
