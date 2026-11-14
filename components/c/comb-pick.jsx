import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_1bdhbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 14h15a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1ZM7 2.5V14m3.5-11.5V14M14 2.5V14m3.5-11.5V14");
}
</style><path class="g_1bdhbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:comb-pick"} {...others} />);
}

export default Component;
