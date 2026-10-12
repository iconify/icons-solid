import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2_x-mbph {
  d: path("M16.5 2.75c-.75 2.5-3.5 7-3.5 12");
}

.bcpv7ehiw {
  d: path("M2.75 6.75c1.5-1.25 3.13-1.25 4.63 0s3.13 1.25 4.63 0s3.13-1.25 4.63 0s3.13 1.25 4.63 0m-18.52 5c1.5-1.25 3.13-1.25 4.63 0s3.13 1.25 4.63 0s3.13-1.25 4.63 0s3.13 1.25 4.63 0M2.75 18c1.5-1.25 3.13-1.25 4.63 0s3.13 1.25 4.63 0s3.13-1.25 4.63 0s3.13 1.25 4.63 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bcpv7ehiw"/><path class="b2_x-mbph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:skin-layer"} {...others} />);
}

export default Component;
