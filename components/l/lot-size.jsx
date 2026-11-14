import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m7rbr9b_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6V3h3m12 0h3v3m0 6v3h-3M6 15H3v-3m7-9h4m-4 12h4M3 8v2m18-2v2M3 19.5h18m-16-2l-2 2l2 2m14-4l2 2l-2 2");
}
</style><path class="m7rbr9b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lot-size"} {...others} />);
}

export default Component;
