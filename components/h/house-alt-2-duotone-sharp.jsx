import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6nj12b8o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M4 21V10l8-7l8 7v11m-10 0v-4a2 2 0 1 1 4 0v4");
}

.ft5dv1b6b {
  fill: none;
}

.ut5srbcco {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 3l8 7v11h-6v-4a1.999 1.999 0 0 0-3-1.732A2 2 0 0 0 10 17v4H4V10Z");
}
</style><g class="ft5dv1b6b"><path class="ut5srbcco"/><path class="d6nj12b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-2-duotone-sharp"} {...others} />);
}

export default Component;
