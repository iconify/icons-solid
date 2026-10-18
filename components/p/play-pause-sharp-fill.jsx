import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5f857bns {
  fill: currentColor;
  d: path("M2.5145 5.1425L12.5145 11.1425C12.8157 11.3232 13 11.6487 13 12C13 12.3513 12.8157 12.6768 12.5145 12.8575L2.5145 18.8575C2.3591 18.9507 2.1812 19 2 19C1.4477 19 1 18.5523 1 18L1 6C1 5.4477 1.4477 5 2 5C2.1812 5 2.3591 5.0493 2.5145 5.1425Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kkwg00bls {
  d: path("M17 5L17 19M22 5L22 19");
}
</style><g class="gp_8x1bzb"><path class="g5f857bns"/><path class="kkwg00bls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:play-pause-sharp-fill"} {...others} />);
}

export default Component;
