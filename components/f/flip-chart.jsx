import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x3quevbqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 3h8.75A2.625 2.625 0 0 1 19 5.625v6.75A2.625 2.625 0 0 1 16.375 15h-8.75A2.625 2.625 0 0 1 5 12.375v-6.75A2.625 2.625 0 0 1 7.625 3M12 14v7.5m0-4l-5 4m5-4l5 4M8 7h8m-8 3.5h5");
}
</style><path class="x3quevbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flip-chart"} {...others} />);
}

export default Component;
