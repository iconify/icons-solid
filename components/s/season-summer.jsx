import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bk18mbb0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-4.25v-1.5m-3.25 2.5L7.5 3.5m7.75 1.25L16.5 3.5M7.5 8H6m10.5 0H18M2.5 13.75h19M4 17q2-1 4 0t4 0t4 0t4 0M7 20.75q2-1 4 0t4 0t4 0");
}
</style><path class="bk18mbb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:season-summer"} {...others} />);
}

export default Component;
