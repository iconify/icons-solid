import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3olmqbjq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M9 20v-7l5-4l5 4v7m-7-9.4V4H5v16");
}

.ft5dv1b6b {
  fill: none;
}

.mk06xwcyh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 13v7H9v-7l5-4Z");
}
</style><g class="ft5dv1b6b"><path class="mk06xwcyh"/><path class="d3olmqbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-1-duotone-sharp"} {...others} />);
}

export default Component;
