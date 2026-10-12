import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.roq2xac0a {
  cx: 16px;
  cy: 12px;
  r: 5.25px;
}

.uh0xixbfs {
  cx: 16px;
  cy: 12px;
  r: 2.25px;
}

.xwa2iehlc {
  d: path("M2.75 9h1.5l3.5 3l-3.5 3h-1.5Z");
}
</style><g class="hntgybcog"><circle class="roq2xac0a"/><circle class="uh0xixbfs"/><path class="xwa2iehlc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:docking-port"} {...others} />);
}

export default Component;
