import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9rha_fnn {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21H4V10l8-7l5.714 5M17 21h-4l1-8h3m0 0h3l1 8h-4m-3-4h6m-3-4v8");
}

.ft5dv1b6b {
  fill: none;
}

.gxcgoj3gp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 3l5.714 5H8v13H4V10Z");
}
</style><g class="ft5dv1b6b"><path class="gxcgoj3gp"/><path class="f9rha_fnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-solar-panel-corner-duotone-sharp"} {...others} />);
}

export default Component;
