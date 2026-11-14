import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rda_n06uy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 7.5h2.5L7 10l-2.5 6.5L2 10ZM2 10h5m3.75-2.5h2.5L14.5 10L12 16.5L9.5 10ZM9.5 10h5m3.75-2.5h2.5L22 10l-2.5 6.5L17 10ZM17 10h5");
}
</style><path class="rda_n06uy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:match-three"} {...others} />);
}

export default Component;
