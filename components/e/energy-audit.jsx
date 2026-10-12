import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h18ufpzwr {
  width: 6px;
  height: 3px;
  x: 9px;
  y: 2.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mrojnk_7j {
  width: 15.5px;
  height: 15.5px;
  x: 4.25px;
  y: 5.75px;
  rx: 2.5px;
}

.wklko4thw {
  d: path("m12.75 9.75l-2.75 4h4L11.25 18");
}
</style><g class="hntgybcog"><rect class="mrojnk_7j"/><rect class="h18ufpzwr"/><path class="wklko4thw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:energy-audit"} {...others} />);
}

export default Component;
