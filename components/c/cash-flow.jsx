import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a__sahttc {
  d: path("M13.13 11.02c-.21-.45-.62-.75-1.12-.75c-.67 0-1.17.39-1.17.86c0 1.22 2.34.61 2.34 1.78c0 .49-.5.83-1.17.83c-.52 0-.96-.28-1.14-.73M4.48 9.26a8 8 0 0 1 13.65-2.4m.17-1.99l-.17 1.99l-1.99-.17m3.38 8.05a8 8 0 0 1-13.65 2.4m-.17 1.99l.17-1.99l1.99.17");
}

.aqhok2bbj {
  cx: 12px;
  cy: 12px;
  r: 4px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="aqhok2bbj"/><path class="a__sahttc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cash-flow"} {...others} />);
}

export default Component;
