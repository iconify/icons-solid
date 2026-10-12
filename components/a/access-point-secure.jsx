import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b52yv8w1g {
  width: 6px;
  height: 5px;
  x: 9px;
  y: 13.75px;
  rx: 1.25px;
}

.hb_y1exot {
  d: path("M10 13.75V12.5a2 2 0 0 1 4 0v1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rd454dc-j {
  d: path("M2.92 7.25a12 12 0 0 1 18.16 0M7 9.5a7.5 7.5 0 0 1 10 0M5 21.25h14");
}
</style><g class="hntgybcog"><path class="rd454dc-j"/><rect class="b52yv8w1g"/><path class="hb_y1exot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:access-point-secure"} {...others} />);
}

export default Component;
