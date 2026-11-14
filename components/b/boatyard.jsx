import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tkg53fbct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10h16.5L17 15.5H5.5A1.5 1.5 0 0 1 4 14Zm6.5 0V3.5l6 6.5m-9 5.5v5m7-5v5M3 20.5h18");
}
</style><path class="tkg53fbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:boatyard"} {...others} />);
}

export default Component;
