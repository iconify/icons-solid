import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdxlpnbwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.4 3.5H21v7h-6.6m-7.8 0H3V6.9m13.6 13.6H3v-7h6.6m7.8 0H21v3.6M6.75 17h.01M11.5 7h6m-6 10h1.6M3.5 3.5l17 17");
}
</style><path class="cdxlpnbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:server-off"} {...others} />);
}

export default Component;
