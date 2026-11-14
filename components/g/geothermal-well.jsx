import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tzekfytaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19m-11.5 0V15m4 5.5V15m-5 0h6m-7-3.5C6.5 9.75 9.5 7.75 8 5m4 6.5c-1.5-2.25 1.5-5 0-8.5m4 8.5c-1.5-1.75 1.5-3.75 0-6.5");
}
</style><path class="tzekfytaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:geothermal-well"} {...others} />);
}

export default Component;
