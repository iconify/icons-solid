import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c_o5l5o1s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 8h14l2 12H3zm3 0a4 4 0 1 1 8 0");
}

.ft5dv1b6b {
  fill: none;
}

.tj8-r-bnr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m19 8l2 12H3L5 8Z");
}
</style><g class="ft5dv1b6b"><path class="tj8-r-bnr"/><path class="c_o5l5o1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:handbag-duotone-sharp"} {...others} />);
}

export default Component;
