import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mcmgg_2_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h19v13h-19ZM6 8.75h.01M6 12h.01m3.49 0h.01m-.01 3.25h.01m4.99-6.5h.01m3.49 0h.01M18 12h.01m-3.51 3.25h.01");
}
</style><path class="mcmgg_2_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:braille-display"} {...others} />);
}

export default Component;
