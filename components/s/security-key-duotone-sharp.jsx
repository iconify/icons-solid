import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dq5hx_b_u {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 7h12v10H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.kt15klw-y {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h12v10H3Zm6 4v2m12-1h-2m-4-3h6v6h-6");
}
</style><g class="ft5dv1b6b"><path class="dq5hx_b_u"/><path class="kt15klw-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:security-key-duotone-sharp"} {...others} />);
}

export default Component;
