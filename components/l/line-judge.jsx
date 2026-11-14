import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w6hzygbwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM3 21.5v-4C3 15 5.5 13 8.5 13s5.5 2 5.5 4.5v4m3.5-19V15m0-12h4v5.5h-4Z");
}
</style><path class="w6hzygbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:line-judge"} {...others} />);
}

export default Component;
