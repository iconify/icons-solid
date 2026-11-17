import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zczsg5bmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.647 20.647A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-3c0-1.9 1.325-3.49 3.101-3.899M13 10h3a4 4 0 0 1 4 4v3M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}
</style><path class="zczsg5bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-off-round"} {...others} />);
}

export default Component;
