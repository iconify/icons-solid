import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dr22nipjt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 6a3 3 0 0 1 3 3a3 3 0 1 0 0 6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3a3 3 0 1 0 0-6a3 3 0 0 1 3-3Z");
}

.ft5dv1b6b {
  fill: none;
}

.wnf54_bhu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 9a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3a3 3 0 0 1 0 6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a3 3 0 0 1 0-6m-7-3v12");
}
</style><g class="ft5dv1b6b"><path class="dr22nipjt"/><path class="wnf54_bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ticket-duotone-round"} {...others} />);
}

export default Component;
