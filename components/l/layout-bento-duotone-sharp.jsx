import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bckvw083f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 4v16H4V4Zm10 0v6h-6V4Zm0 10v6h-6v-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.slhzj9bth {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h6v16H4Zm10 10h6v6h-6Zm0-10h6v6h-6Z");
}
</style><g class="ft5dv1b6b"><path class="bckvw083f"/><path class="slhzj9bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:layout-bento-duotone-sharp"} {...others} />);
}

export default Component;
