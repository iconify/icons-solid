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

.oas49dbjt {
  d: path("M3 19.5c2-3.25 4-3.25 4.5-1s2 2.25 3.5-.5c1-1.75 2.5-1 2.5.75c0 1.25 2.5 1 7.5-1");
}

.rut8rgbzu {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5m0 4h8M8 10h8m-8 3.5h4");
}
</style><g class="hntgybcog"><path class="rut8rgbzu"/><path class="oas49dbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:signed-contract"} {...others} />);
}

export default Component;
