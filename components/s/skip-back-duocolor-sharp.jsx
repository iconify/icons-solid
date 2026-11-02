import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j6i5yqb-r {
  d: path("M20 5L8 12l12 7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u7pjc2b7b {
  stroke-opacity: 0.4;
  d: path("M4 5v14");
}
</style><g class="nrj6p8qat"><path class="u7pjc2b7b"/><path class="j6i5yqb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-back-duocolor-sharp"} {...others} />);
}

export default Component;
