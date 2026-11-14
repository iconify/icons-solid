import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tq_y_bcfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 2.5h4.5l1.5 19h-7.5ZM13.5 8H19m-5.75 5h6M3 18h7m-2.75-2.75L10 18l-2.75 2.75");
}
</style><path class="tq_y_bcfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:carbon-capture-tower"} {...others} />);
}

export default Component;
