import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sjpct4_2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M5 20v-7c0-1.28.36-2.36 1-3l3-3a4.243 4.243 0 0 1 6 0l3 3c.64.64 1 1.72 1 3v7m-9 0v-4a2 2 0 1 1 4 0v4");
}
</style><path class="sjpct4_2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-2-round"} {...others} />);
}

export default Component;
