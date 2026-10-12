import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s0tybt4jh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 4.5c2-1 4-1.25 6.75 0s4.75 1 7.5 0v9.75c-2.75 1-4.75 1.25-7.5 0s-4.75-1-6.75 0Zm0 16.75V3.75");
}
</style><path class="s0tybt4jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:flag-pennant"} {...others} />);
}

export default Component;
