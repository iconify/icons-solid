import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ylh6k0byc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.078 3.922za2.25 2.25 0 0 1 0 3.182l-2.474 2.474a2.25 2.25 0 0 1-3.182 0a2.25 2.25 0 0 1 0-3.182l2.474-2.474a2.25 2.25 0 0 1 3.182 0M3.5 20.5l11-11M7 17l-2.5-2.5");
}
</style><path class="ylh6k0byc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:boom-pole"} {...others} />);
}

export default Component;
