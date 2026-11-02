import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-hsjgboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 5L5 19M5 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="y-hsjgboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:percent-round"} {...others} />);
}

export default Component;
