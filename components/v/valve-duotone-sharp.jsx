import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.jhtgf4l7s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12h5V9h8v3h5v4h-5v3H8v-3H3zm0-2v8m18-8v8m-9-9V5M9 5h6");
}

.vdw1fw0mr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 12h5V9h8v3h5v4h-5v3H8v-3H3Z");
}
</style><g class="ft5dv1b6b"><path class="vdw1fw0mr"/><path class="jhtgf4l7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:valve-duotone-sharp"} {...others} />);
}

export default Component;
