import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0lms1efh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 15H7a4 4 0 0 1-4-4V7a2 2 0 0 1 2-2h6a10 10 0 0 1 8 4c1.2 1.6 2 2.5 2 4a2 2 0 0 1-2 2M3 9h16M9 5v4M3 19h18");
}

.ft5dv1b6b {
  fill: none;
}

.qcweu435w {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 15H7a4 4 0 0 1-4-4V7a2 2 0 0 1 2-2h6a10 10 0 0 1 8 4c1.2 1.6 2 2.5 2 4a2 2 0 0 1-2 2");
}
</style><g class="ft5dv1b6b"><path class="qcweu435w"/><path class="a0lms1efh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:train-side-duotone-round"} {...others} />);
}

export default Component;
