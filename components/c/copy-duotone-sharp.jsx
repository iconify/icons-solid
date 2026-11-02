import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cf4lno-jv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h14v14H3Zm4-4h14v14");
}

.ft5dv1b6b {
  fill: none;
}

.qx2-4wb0y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 7h14v14H3Z");
}
</style><g class="ft5dv1b6b"><path class="qx2-4wb0y"/><path class="cf4lno-jv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-duotone-sharp"} {...others} />);
}

export default Component;
