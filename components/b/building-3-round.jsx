import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v0nk-xj4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20v-5.078A4 4 0 0 1 6.501 11.8l1-.8a4 4 0 0 1 4.998 0l1 .8A4 4 0 0 1 15 14.923V20m-8-8.6V4h8a4 4 0 0 1 4 4v12");
}
</style><path class="v0nk-xj4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-round"} {...others} />);
}

export default Component;
