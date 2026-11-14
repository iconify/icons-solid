import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ont7ohbly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9a6.5 7 0 1 0 13 0a6.5 7 0 1 0-13 0m6.5 7v5.5m-2.25-19v13m4.5-13v13m-8.5-8.75h12.5m-12.5 4.5h12.5");
}
</style><path class="ont7ohbly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tennis-strings"} {...others} />);
}

export default Component;
