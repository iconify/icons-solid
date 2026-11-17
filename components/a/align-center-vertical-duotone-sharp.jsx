import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.ts82lc2hg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4v16h6V4Zm10 2v12h6V6ZM3 12h18");
}

.zx9lhrb7s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h6v16H4Zm10 2h6v12h-6Z");
}
</style><g class="ft5dv1b6b"><path class="zx9lhrb7s"/><path class="ts82lc2hg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-center-vertical-duotone-sharp"} {...others} />);
}

export default Component;
