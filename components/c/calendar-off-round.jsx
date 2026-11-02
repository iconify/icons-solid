import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wv07bsafv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 19c-.723 1.037-1.64 2-3 2H8a4 4 0 0 1-4-4V9c0-1.36.963-2.277 2-3m5-1h5a4 4 0 0 1 4 4v5M4 9h5m6 0h5m-4-6v2M2 2l20 20");
}
</style><path class="wv07bsafv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-off-round"} {...others} />);
}

export default Component;
