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

.k1wql5byy {
  d: path("m3.75 15.75l3.75-7.5l4.5 7.5l4.5-7.5l3.75 7.5");
}

.nl_ilc3hh {
  width: 18.5px;
  height: 2.5px;
  x: 2.75px;
  y: 15.75px;
  rx: 1px;
}

.t_vvwwwxt {
  width: 18.5px;
  height: 2.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="t_vvwwwxt"/><rect class="nl_ilc3hh"/><path class="k1wql5byy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:girder"} {...others} />);
}

export default Component;
