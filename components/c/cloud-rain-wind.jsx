import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ttgcv10ud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14a4 4 0 0 1 0-8a6 6 0 0 1 11 0a4 4 0 0 1 0 8Zm0 2.75l-1 3.75m4.25-3.75l-1 3.75M13 16.75l-1 3.75m3 .25h4a1.75 1.75 0 0 0 0-3.5");
}
</style><path class="ttgcv10ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cloud-rain-wind"} {...others} />);
}

export default Component;
