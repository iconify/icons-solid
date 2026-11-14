import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v4rjzoyae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 18h9m-12-2h1a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2m14 0h1a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2M5 16L9 3.5M19 16L15 3.5");
}
</style><path class="v4rjzoyae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kite-control-bar"} {...others} />);
}

export default Component;
