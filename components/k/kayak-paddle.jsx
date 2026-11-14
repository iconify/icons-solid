import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k3qd01ahp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.129 5.043l1.414-1.414a2 2 0 0 1 2.828 0a2 2 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828m-12.5 12.5l1.414-1.414a2 2 0 0 1 2.828 0a2 2 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828M7.75 16.25l8.5-8.5");
}
</style><path class="k3qd01ahp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kayak-paddle"} {...others} />);
}

export default Component;
