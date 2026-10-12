import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p6tp6_b5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4v6.1L16.96 14H7.04L10 8.85ZM7.04 14h9.92l2.24 3.9a2.25 2.25 0 0 1-1.95 3.35H6.79a2.25 2.25 0 0 1-1.95-3.35ZM8.5 2.75h7");
}
</style><path class="p6tp6_b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:volumetric-flask"} {...others} />);
}

export default Component;
