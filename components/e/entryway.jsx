import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.urj40eq8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 18V4a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 4v14M2.5 18h19M6.875 20h10.25a.875.875 0 0 1 .875.875a.875.875 0 0 1-.875.875H6.875A.875.875 0 0 1 6 20.875A.875.875 0 0 1 6.875 20M14 11h.01");
}
</style><path class="urj40eq8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:entryway"} {...others} />);
}

export default Component;
