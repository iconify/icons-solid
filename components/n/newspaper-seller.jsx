import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u5ivw2oeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M3 21.5c0-4 2.75-6.75 6.5-6.75c.917 0 1.835.21 2.559.438M16 21.5h4.5a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1za1.5 1.5 0 0 1-1.5-1.5v-3.5H16");
}
</style><path class="u5ivw2oeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:newspaper-seller"} {...others} />);
}

export default Component;
