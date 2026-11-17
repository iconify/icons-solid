import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ff9ueebvs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2 17a4 4 0 1 1 8 0a4 4 0 0 1-8 0m12 0a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-8 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}

.ft5dv1b6b {
  fill: none;
}

.p6uz76bvs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 17a4 4 0 1 1 8 0m0 0a4 4 0 1 1-8 0m12 0a4 4 0 1 1 8 0m0 0a4 4 0 1 1-8 0m-8 0L9 5M8 9h8m2 8L15 5M6 5h4m5 0h3a2 2 0 0 1 2 2");
}
</style><g class="ft5dv1b6b"><path class="ff9ueebvs"/><path class="p6uz76bvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bike-duotone-round"} {...others} />);
}

export default Component;
