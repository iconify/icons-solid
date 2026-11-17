import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.au12bej0m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20v-9h6V4h6v4h6v12zm6 0v-9m6 9V8");
}

.ft5dv1b6b {
  fill: none;
}

.jvnvr5bbe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 4h6v16H9Zm12 4v12h-5V8ZM8 11v9H3v-9Z");
}
</style><g class="ft5dv1b6b"><path class="jvnvr5bbe"/><path class="au12bej0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bar-vertical-duotone-sharp"} {...others} />);
}

export default Component;
