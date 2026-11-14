import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdyjbmsve {
  d: path("m9.5 2.5l-2 2l2 2m8 8l2 2l2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mtx_ldbpn {
  d: path("M3.5 3v17.5H21M7.5 4.5c6.5 0 12 5.5 12 12");
}
</style><g class="hntgybcog"><path class="mtx_ldbpn"/><path class="fdyjbmsve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-swap-axes"} {...others} />);
}

export default Component;
