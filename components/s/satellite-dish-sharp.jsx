import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oouo4ab_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 19a5.657 5.657 0 1 1-8-8Zm-4-4l4-4m0-4a4 4 0 0 1 4 4m-4-8a8 8 0 0 1 8 8");
}
</style><path class="oouo4ab_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:satellite-dish-sharp"} {...others} />);
}

export default Component;
