import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0i-b5b0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.575 16.95l3.927-3.927a3 3 0 0 0 .256-.298l6.027-8.169a2.625 2.625 0 0 1 3.969-.298l.988.988a2.625 2.625 0 0 1-.298 3.969l-8.169 6.027a3 3 0 0 0-.298.256L7.05 19.425a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475m-2.121.353l4.243 4.243");
}
</style><path class="d0i-b5b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:baseball-bat"} {...others} />);
}

export default Component;
