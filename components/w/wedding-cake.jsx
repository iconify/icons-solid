import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e4d2qz4cn {
  width: 16px;
  height: 3px;
  x: 4px;
  y: 18.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.ej4_3wbll {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h.01");
}

.rpc67cckl {
  width: 6px;
  height: 3px;
  x: 9px;
  y: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zm9b1usey {
  width: 11px;
  height: 3px;
  x: 6.5px;
  y: 12.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}
</style><g class="y9tr6bcfx"><rect class="rpc67cckl"/><rect class="zm9b1usey"/><rect class="e4d2qz4cn"/><path class="ej4_3wbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wedding-cake"} {...others} />);
}

export default Component;
