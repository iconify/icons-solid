import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.el2pe3rtu {
  width: 3px;
  height: 3px;
  x: 10.5px;
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

.q35lrvvtz {
  d: path("M10.25 5.75h3.5l-.25 6l5.85 4.4c.6.45.9.95.9 1.6V19A2.25 2.25 0 0 1 18 21.25H6A2.25 2.25 0 0 1 3.75 19v-1.25c0-.65.3-1.15.9-1.6l5.85-4.4Zm-6.5 12.5h16.5");
}
</style><g class="hntgybcog"><rect class="el2pe3rtu"/><path class="q35lrvvtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:decanter"} {...others} />);
}

export default Component;
