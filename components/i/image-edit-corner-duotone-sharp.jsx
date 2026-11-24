import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_0roerfi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 3v8H10v10H3V3Zm-7 18v-3l4-4l3 3l-4 4Z");
}

.ft5dv1b6b {
  fill: none;
}

.olw_iybjs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 21H3V3h18v8M3 17l6-6l2 2m3-5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 13v-3l4-4l3 3l-4 4Z");
}
</style><g class="ft5dv1b6b"><path class="e_0roerfi"/><path class="olw_iybjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-edit-corner-duotone-sharp"} {...others} />);
}

export default Component;
