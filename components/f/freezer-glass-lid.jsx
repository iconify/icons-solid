import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mt0tvebld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14L21.5 9h-19Zm6.5 14h-9V9h19v3.9m-14-.4h5m5.5 2.25v6.5m-2.75-4.75l5.5 3m-5.5 0l5.5-3");
}
</style><path class="mt0tvebld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:freezer-glass-lid"} {...others} />);
}

export default Component;
