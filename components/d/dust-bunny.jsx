import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wd2_kmdov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 4.375l.37.508a1.5 1.5 0 0 0 1.654.552l.601-.185a1.256 1.256 0 0 1 1.625 1.2v.692a1.5 1.5 0 0 0 1.059 1.434l.566.174a1.214 1.214 0 0 1 .625 1.875l-.358.493a1.5 1.5 0 0 0 0 1.764l.358.493a1.214 1.214 0 0 1-.625 1.875l-.566.174a1.5 1.5 0 0 0-1.059 1.434v.692a1.256 1.256 0 0 1-1.625 1.2l-.601-.185a1.5 1.5 0 0 0-1.654.552l-.37.508a1.236 1.236 0 0 1-2 0l-.37-.508a1.5 1.5 0 0 0-1.654-.552l-.601.185a1.256 1.256 0 0 1-1.625-1.2v-.692a1.5 1.5 0 0 0-1.059-1.434l-.566-.174a1.214 1.214 0 0 1-.625-1.875l.358-.493a1.5 1.5 0 0 0 0-1.764l-.358-.493a1.214 1.214 0 0 1 .625-1.875l.566-.174A1.5 1.5 0 0 0 6.75 7.142V6.45a1.256 1.256 0 0 1 1.625-1.2l.601.185a1.5 1.5 0 0 0 1.654-.552l.37-.508a1.236 1.236 0 0 1 2 0M9.5 12h.01m4.99 0h.01");
}
</style><path class="wd2_kmdov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dust-bunny"} {...others} />);
}

export default Component;
