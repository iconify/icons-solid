import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cv5o3tbzk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 20v-8H4l8-8l8 8h-5v8Z");
}

.ft5dv1b6b {
  fill: none;
}

.t2sx2dbpg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20H9v-8H4l8-8l8 8h-5v8z");
}
</style><g class="ft5dv1b6b"><path class="cv5o3tbzk"/><path class="t2sx2dbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-up-duotone-sharp"} {...others} />);
}

export default Component;
