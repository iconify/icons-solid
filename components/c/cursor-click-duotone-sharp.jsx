import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfrj5tb9l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9 9l12 4l-4 1l3 3l-3 3l-3-3l-1 4Z");
}

.ft5dv1b6b {
  fill: none;
}

.ipgerybnw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l12 4l-4 1l3 3l-3 3l-3-3l-1 4zm0-4V3M5 9H3m10-4l1-1m-9 9l-1 1");
}
</style><g class="ft5dv1b6b"><path class="cfrj5tb9l"/><path class="ipgerybnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-click-duotone-sharp"} {...others} />);
}

export default Component;
