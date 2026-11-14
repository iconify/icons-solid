import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ntb57hhim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 5.5zA3.5 3.5 0 0 1 14.5 9v6a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 7.5 15V9A3.5 3.5 0 0 1 11 5.5m0 0v-3h6m-6 16v3h6M7.5 14h7");
}
</style><path class="ntb57hhim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gas-separator"} {...others} />);
}

export default Component;
