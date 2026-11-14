import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccm5wfbao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 12h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 6 17H4a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 4 12m14 0h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 20 17h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 18 12M7.5 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M12 10V5M8 5h8");
}
</style><path class="ccm5wfbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-valve"} {...others} />);
}

export default Component;
