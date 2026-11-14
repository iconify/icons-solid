import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xukoaybbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9c0 1.5-2.5 2-2.5 4.5v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6c0-2.5-2.5-3-2.5-4.5V5.5c0-2-1.5-3-1.5-3s-1.5 1-1.5 3ZM8 15.5h8");
}
</style><path class="xukoaybbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ampoule"} {...others} />);
}

export default Component;
