import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.grqc149xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8L8 5V3h5v2l2.5 3v11.5A1.5 1.5 0 0 1 14 21H7a1.5 1.5 0 0 1-1.5-1.5Zm10 2H17a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 17 16h-1.5M8 13h5");
}
</style><path class="grqc149xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:milk-jug-plastic"} {...others} />);
}

export default Component;
