import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a9oprow2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19v-7c0-5.5 4-9 9-9c4.5 0 7.5 3 8 7.5H13V19Zm9.5 0h4c2.5 0 4-2 4-4.5v-4m-4 0V19m-4-4.25h8");
}
</style><path class="a9oprow2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hockey-helmet-cage"} {...others} />);
}

export default Component;
