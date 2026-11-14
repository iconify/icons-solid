import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwrtcgk9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 12h4a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1ZM5.5 3A2.5 2.5 0 1 1 3 5.5m4.25 1.75L12 12m0 0V3.5h2.25M12 12l6.5-6.5M17 4l3 3m-8 8h.01");
}
</style><path class="qwrtcgk9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bike-multitool"} {...others} />);
}

export default Component;
