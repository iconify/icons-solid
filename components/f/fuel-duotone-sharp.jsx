import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6f57kg6n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h10v18H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.h_6_o6e7q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h10v18H3Zm0 6h10m0 3h4v5h4V7l-3-3");
}
</style><g class="ft5dv1b6b"><path class="e6f57kg6n"/><path class="h_6_o6e7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fuel-duotone-sharp"} {...others} />);
}

export default Component;
