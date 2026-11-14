import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xcy-vlb2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.25 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m8.75 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5.75 10.5h3.5m-3.5 3h3.5m5.5-3h3.5m-3.5 3h3.5");
}
</style><path class="xcy-vlb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:carbon-dioxide"} {...others} />);
}

export default Component;
