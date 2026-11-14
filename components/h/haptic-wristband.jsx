import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2278gb6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.875 7.5h.25a4.375 4.375 0 0 1 4.375 4.375v.25a4.375 4.375 0 0 1-4.375 4.375h-.25A4.375 4.375 0 0 1 7.5 12.125v-.25A4.375 4.375 0 0 1 11.875 7.5M10 7.5v-5h4v5m-4 9v5h4v-5M5 9a4.5 4.5 0 0 0 0 6m14-6a4.5 4.5 0 0 1 0 6");
}
</style><path class="l2278gb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:haptic-wristband"} {...others} />);
}

export default Component;
