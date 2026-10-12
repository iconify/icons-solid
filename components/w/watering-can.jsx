import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dadz5xb2y {
  width: 10px;
  height: 11.75px;
  x: 3.5px;
  y: 9.5px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vgm7onbsh {
  d: path("M6 9.5v-2a2.75 2.75 0 0 1 2.75-2.75h.5A2.75 2.75 0 0 1 12 7.5v2m1.5 8.5l5.75-8.25M17.5 8.5L21 11M3.5 13h10");
}
</style><g class="hntgybcog"><rect class="dadz5xb2y"/><path class="vgm7onbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:watering-can"} {...others} />);
}

export default Component;
