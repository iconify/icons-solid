import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bthtq9f-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9a8.5 3 0 1 0 17 0a8.5 3 0 1 0-17 0m0 0v6m17-6v6m-17 0a8.5 3 0 0 0 17 0m0-5.25h2v3h-2");
}
</style><path class="bthtq9f-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cake-tin"} {...others} />);
}

export default Component;
