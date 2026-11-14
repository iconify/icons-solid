import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p1rzkk45h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 3h2.5a3.5 3.5 0 0 1 3.5 3.5v11a3.5 3.5 0 0 1-3.5 3.5h-2.5a3.5 3.5 0 0 1-3.5-3.5v-11a3.5 3.5 0 0 1 3.5-3.5M10 7.5h4M10 11h4m-4 3.5h2.5m-8-5l-2 2.5l2 2.5m15-5l2 2.5l-2 2.5");
}
</style><path class="p1rzkk45h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:api-pagination"} {...others} />);
}

export default Component;
