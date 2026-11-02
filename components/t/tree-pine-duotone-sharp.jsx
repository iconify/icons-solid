import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fbvlvacpp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l5 4h-3l5 5h-4l6 6H3l6-6H5l5-5H7zm0 15v3");
}

.ft5dv1b6b {
  fill: none;
}

.ib7a4r0ji {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 7h-3l5 5h-4l6 6H3l6-6H5l5-5H7l5-4Z");
}
</style><g class="ft5dv1b6b"><path class="ib7a4r0ji"/><path class="fbvlvacpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tree-pine-duotone-sharp"} {...others} />);
}

export default Component;
