import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.paqcexbmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5c2.5-3.75 8.5-4 11.5-1l4-2.5v7l-4-2.5c-3 3-9 2.75-11.5-1m-1 12q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0m-9-7V16m-1.75-1.75L12 16l1.75-1.75");
}
</style><path class="paqcexbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:catch-and-release"} {...others} />);
}

export default Component;
