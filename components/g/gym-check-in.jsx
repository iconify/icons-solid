import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qhrx_pbrs {
  d: path("M3.5 21V3h12v11.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxijcab8g {
  d: path("M3.5 3L11 5v12.838m0 .4V19.5L3.5 21m5-8.5h.01m6.24 5.5l2 2L21 15.75");
}
</style><g class="ulnmmdpxh"><path class="qhrx_pbrs"/><path class="xxijcab8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gym-check-in"} {...others} />);
}

export default Component;
