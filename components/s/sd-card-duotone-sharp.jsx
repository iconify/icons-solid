import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ejac3b2_g {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 7l4-4h10v18H5zm5 0v3m3-3v3m3-3v3");
}

.ft5dv1b6b {
  fill: none;
}

.mbgpmhb4y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 3h10v18H5V7Z");
}
</style><g class="ft5dv1b6b"><path class="mbgpmhb4y"/><path class="ejac3b2_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sd-card-duotone-sharp"} {...others} />);
}

export default Component;
