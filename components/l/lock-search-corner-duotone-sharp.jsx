import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qx6dw0biv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 21H4V9h16v2M8 9V7a4 4 0 1 1 8 0v2m4 11a2.828 2.828 0 1 1-4-4a2.828 2.828 0 0 1 4 4m0 0l2 2");
}

.v8004ybqc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 21H4V9h7Z");
}
</style><g class="ft5dv1b6b"><path class="v8004ybqc"/><path class="qx6dw0biv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-search-corner-duotone-sharp"} {...others} />);
}

export default Component;
