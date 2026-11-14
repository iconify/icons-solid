import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s_hd_sdkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4.5m-14 5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5M3 12h3m4.5 0h3m4.5 0h3");
}
</style><path class="s_hd_sdkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:text-page-break"} {...others} />);
}

export default Component;
