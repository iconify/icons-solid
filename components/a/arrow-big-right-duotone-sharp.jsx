import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fj9_ogb0f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 9h8V4l8 8l-8 8v-5H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.if5imhb1b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12V9h8V4l8 8l-8 8v-5H4z");
}
</style><g class="ft5dv1b6b"><path class="fj9_ogb0f"/><path class="if5imhb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-right-duotone-sharp"} {...others} />);
}

export default Component;
