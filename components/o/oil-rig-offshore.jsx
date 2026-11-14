import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gho9mmbnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 11h15a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 12.5A1.5 1.5 0 0 1 4.5 11M8 11l2.5-8.5L13 11m-7.5 3v7.5m13-7.5v7.5m-2-14H18A1.5 1.5 0 0 1 19.5 9v.5A1.5 1.5 0 0 1 18 11h-1.5A1.5 1.5 0 0 1 15 9.5V9a1.5 1.5 0 0 1 1.5-1.5M9 7.5h3M8 18q1-1 2 0t2 0t2 0t2 0");
}
</style><path class="gho9mmbnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:oil-rig-offshore"} {...others} />);
}

export default Component;
