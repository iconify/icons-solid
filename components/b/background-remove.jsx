import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmvvz6opb {
  d: path("M5.5 20.25c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.la9_y441a {
  cx: 12px;
  cy: 8.25px;
  r: 3px;
}

.lc-7jebsr {
  d: path("M2.75 6.5V5.25a2.5 2.5 0 0 1 2.5-2.5H6.5m4 0h3m4 0h1.25a2.5 2.5 0 0 1 2.5 2.5V6.5m0 4v3m-18.5-3v3");
}
</style><g class="hntgybcog"><path class="lc-7jebsr"/><circle class="la9_y441a"/><path class="fmvvz6opb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:background-remove"} {...others} />);
}

export default Component;
