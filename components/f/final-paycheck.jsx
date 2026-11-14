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

.ho-6xzyxe {
  d: path("m5 4l1.171.585A1.5 1.5 0 0 1 7 5.927v12.646a1.5 1.5 0 0 1-.829 1.342L5 20.5a1.382 1.382 0 0 1-2-1.236V5.236A1.382 1.382 0 0 1 5 4m4.75 11.75h1.5m-1.5 3h1.5m3-.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25-.5v1");
}

.le72v5b1z {
  d: path("M3 21.5V3h11v10.3");
}
</style><g class="hntgybcog"><path class="le72v5b1z"/><path class="ho-6xzyxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:final-paycheck"} {...others} />);
}

export default Component;
