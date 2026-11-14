import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0s33f4sq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9 5.5L5 9.75l2.5 6.75v5m7.5-16l4 4.25l-2.5 6.75v5");
}
</style><path class="p0s33f4sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:throw-in"} {...others} />);
}

export default Component;
