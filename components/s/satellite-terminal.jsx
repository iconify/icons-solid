import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbxmotbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.323 10.668l1.765-5A1.75 1.75 0 0 1 6.738 4.5h9.289a1.75 1.75 0 0 1 1.65 2.332l-1.765 5A1.75 1.75 0 0 1 14.262 13H4.973a1.75 1.75 0 0 1-1.65-2.332M7.75 13v4.5L5 20.5h8.5l-3.25-3V13m8-11a3 3 0 0 1 3 3");
}
</style><path class="lbxmotbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:satellite-terminal"} {...others} />);
}

export default Component;
