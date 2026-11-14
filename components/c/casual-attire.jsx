import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jas6sbisb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5q3 3 6 0L21.5 7l-2 4.5l-2-1v10h-11v-10l-2 1l-2-4.5ZM6.5 5v5.5m11-5.5v5.5");
}
</style><path class="jas6sbisb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:casual-attire"} {...others} />);
}

export default Component;
