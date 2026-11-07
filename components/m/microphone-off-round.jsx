import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bwbwet47k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 8v3a3 3 0 0 0 5.121 2.121M15 8V6a3 3 0 0 0-4.562-2.562M12 18v3M5 10v1a7 7 0 0 0 11.95 4.95M3 2l19 19");
}
</style><path class="bwbwet47k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:microphone-off-round"} {...others} />);
}

export default Component;
