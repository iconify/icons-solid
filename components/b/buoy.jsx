import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n87ia_05w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16.75L10.5 6.5h3L17 16.75ZM12 6.5v-4M2.5 20.25q2.375-1.5 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="n87ia_05w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:buoy"} {...others} />);
}

export default Component;
