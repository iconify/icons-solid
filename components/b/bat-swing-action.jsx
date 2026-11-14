import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tbmzc-bee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.5 21.5V18c0-3.5 2-5 4.5-5s4.5 1.5 4.5 5v3.5m7.548-19.773l2.475 2.475l-7.071 7.071l-2.475-2.475ZM14.25 9l-2.75 2.75M21 10.5q-.5 6.5-6 10");
}
</style><path class="tbmzc-bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bat-swing-action"} {...others} />);
}

export default Component;
