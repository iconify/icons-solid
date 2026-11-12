import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bm-vms64y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19.284 19.284A3.98 3.98 0 0 1 16 21H8a4 4 0 0 1-4-4V9h5ZM15 9h5v5Z");
}

.ft5dv1b6b {
  fill: none;
}

.lxk5_1_fy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.284 19.284A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4V9c0-1.36.679-2.561 1.716-3.284M11 5h5a4 4 0 0 1 4 4v5M4 9h5m6 0h5m-4-6v2M2 2l20 20");
}
</style><g class="ft5dv1b6b"><path class="bm-vms64y"/><path class="lxk5_1_fy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-off-duotone-round"} {...others} />);
}

export default Component;
