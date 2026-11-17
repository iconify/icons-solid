import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0pb1ccsn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 3l4 4v14H3V3Z");
}

.ft5dv1b6b {
  fill: none;
}

.jzt02jwik {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h14l4 4v14H3zm4 18v-7h10v7M9 7h6");
}
</style><g class="ft5dv1b6b"><path class="c0pb1ccsn"/><path class="jzt02jwik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:save-duotone-sharp"} {...others} />);
}

export default Component;
