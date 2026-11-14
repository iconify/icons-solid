import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p_ctrs9hi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h6v5h7v-5h6v8.5h-19ZM10 3h4a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 14 9h-4a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 10 3");
}
</style><path class="p_ctrs9hi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mortise-joint"} {...others} />);
}

export default Component;
