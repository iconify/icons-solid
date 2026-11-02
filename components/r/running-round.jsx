import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vjdle_l-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 9l-2 5l4 3v4m-4-7l-2 4l-4-1m3-5l1-3h4l3 3h5m-6-7a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="vjdle_l-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:running-round"} {...others} />);
}

export default Component;
