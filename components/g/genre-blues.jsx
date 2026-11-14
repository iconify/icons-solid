import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gk_jtj2ar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6.25h12a3.5 3.5 0 0 1 3.5 3.5v4.5a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-4.5A3.5 3.5 0 0 1 6 6.25m-3.5 3h19M6.5 12v3m3.75-3v3M14 12v3m3.75-3v3");
}
</style><path class="gk_jtj2ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:genre-blues"} {...others} />);
}

export default Component;
