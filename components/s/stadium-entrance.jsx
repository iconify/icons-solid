import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rxccw8b0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 6.5h1.25A2.625 2.625 0 0 1 9.5 9.125v9.75A2.625 2.625 0 0 1 6.875 21.5h-1.25A2.625 2.625 0 0 1 3 18.875v-9.75A2.625 2.625 0 0 1 5.625 6.5M21 6.5v15M9.5 10H18m-8.5 0l6.5 6.5M9.5 10l5-6");
}
</style><path class="rxccw8b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stadium-entrance"} {...others} />);
}

export default Component;
