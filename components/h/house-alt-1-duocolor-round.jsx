import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y5q97ac9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17v1a3 3 0 0 0 6 0v-6.185a4 4 0 0 0-1.366-3.01l-4-3.5a4 4 0 0 0-5.268 0l-4 3.5A4 4 0 0 0 4 11.815V18a3 3 0 0 0 6 0v-1a2 2 0 1 1 4 0");
}
</style><path class="y5q97ac9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-1-duocolor-round"} {...others} />);
}

export default Component;
