import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a24yqwbfv {
  cx: 12px;
  cy: 14.75px;
  r: 3.25px;
}

.cwglfxbbx {
  width: 10.5px;
  height: 3px;
  x: 6.75px;
  y: 5.75px;
  rx: 1px;
}

.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><rect class="cwglfxbbx"/><circle class="a24yqwbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:magazine"} {...others} />);
}

export default Component;
