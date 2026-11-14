import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.muc1pc_ct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4.5c0-1.5 2-2 5-2s5 .5 5 2c0 2.5-2 4-2 5.5s1.5 2.5 1.5 4.5h-9c0-2 1.5-3 1.5-4.5S7 7 7 4.5m5 10V19m-4 2.5a4 2.5 0 0 1 8 0Z");
}
</style><path class="muc1pc_ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dress-form"} {...others} />);
}

export default Component;
