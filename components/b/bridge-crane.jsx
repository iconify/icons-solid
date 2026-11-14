import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v8jwszlbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-18 0v17m17-17v17M11 4h2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 13 7h-2a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11 4m1 3v6m0 0v2.5a2 2 0 1 1-2 2");
}
</style><path class="v8jwszlbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bridge-crane"} {...others} />);
}

export default Component;
