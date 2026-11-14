import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.imxifygmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3.5 13c0-4 3-6 6.5-6s6.5 2 6.5 6m-1-5L18 7.75M16 5a2.75 2.75 0 1 0 5.5 0A2.75 2.75 0 1 0 16 5");
}
</style><path class="imxifygmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cricketer-bowling"} {...others} />);
}

export default Component;
