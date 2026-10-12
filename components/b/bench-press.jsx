import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cz183zbku {
  width: 2px;
  height: 5.5px;
  x: 4.25px;
  y: 3.25px;
  rx: 0.75px;
}

.eesqqtb5h {
  d: path("M2.75 6h18.5");
}

.hniznjo0b {
  d: path("M7.5 12.5h7m-5.5 0V6m5.5 6.5l3.5 2v6.75M4.75 16h11M6.5 16v5.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hpp_jlb1x {
  width: 2px;
  height: 5.5px;
  x: 17.75px;
  y: 3.25px;
  rx: 0.75px;
}

.mf93ukbgu {
  cx: 5px;
  cy: 12.25px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="eesqqtb5h"/><rect class="cz183zbku"/><rect class="hpp_jlb1x"/><circle class="mf93ukbgu"/><path class="hniznjo0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bench-press"} {...others} />);
}

export default Component;
