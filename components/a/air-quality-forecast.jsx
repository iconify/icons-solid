import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lwy0otsyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.5V15m3 6.5v-9m3 9v-12m3 12V13m3 8.5V6M4.5 9.5a2.5 2.5 0 0 1 0-5a3.5 3.5 0 0 1 6.5.75a2.25 2.25 0 0 1-.25 4.25Z");
}
</style><path class="lwy0otsyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:air-quality-forecast"} {...others} />);
}

export default Component;
