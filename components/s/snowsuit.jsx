import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t12dxsbvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7c0-4.25 7-4.25 7 0l4 3l1 5.5h-2.75l-1.25-3v9H13l-1-6l-1 6H7.5v-9l-1.25 3H3.5l1-5.5Zm3.5.5v5");
}
</style><path class="t12dxsbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:snowsuit"} {...others} />);
}

export default Component;
