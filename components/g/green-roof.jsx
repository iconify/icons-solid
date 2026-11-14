import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xxfx3yblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9.5h14.5A1.75 1.75 0 0 1 21 11.25v1.5a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 12.75v-1.5A1.75 1.75 0 0 1 4.75 9.5M3 9.5a3 3 0 0 1 6 0a3 3 0 0 1 6 0a3 3 0 0 1 6 0m-18.5 8h19");
}
</style><path class="xxfx3yblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:green-roof"} {...others} />);
}

export default Component;
