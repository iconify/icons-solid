import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c__mxzcyr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 9h16v12H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.i9t-8lpig {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 9h16v12H4Zm7 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 1v2M8 9V7a4 4 0 1 1 8 0v2");
}
</style><g class="ft5dv1b6b"><path class="c__mxzcyr"/><path class="i9t-8lpig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-keyhole-duotone-sharp"} {...others} />);
}

export default Component;
