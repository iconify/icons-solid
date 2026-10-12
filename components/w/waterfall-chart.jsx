import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aiengjbpn {
  width: 2.75px;
  height: 9px;
  x: 18.5px;
  y: 11.25px;
  rx: 1px;
}

.f7_du8_ck {
  width: 2.75px;
  height: 3.5px;
  x: 13.25px;
  y: 7.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j0k_gwbga {
  width: 2.75px;
  height: 5px;
  x: 8px;
  y: 7.75px;
  rx: 1px;
}

.xs8z3qb9r {
  width: 2.75px;
  height: 7.5px;
  x: 2.75px;
  y: 12.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="xs8z3qb9r"/><rect class="j0k_gwbga"/><rect class="f7_du8_ck"/><rect class="aiengjbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:waterfall-chart"} {...others} />);
}

export default Component;
