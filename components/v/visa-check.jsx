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

.i0nnczrvr {
  cx: 14.5px;
  cy: 15.75px;
  r: 2.75px;
}

.kh8fq70xi {
  width: 15.5px;
  height: 18.5px;
  x: 4.25px;
  y: 2.75px;
  rx: 2px;
}

.re3zbnbhv {
  d: path("M7.75 7h8.5m-8.5 3.5h5.5");
}
</style><g class="hntgybcog"><rect class="kh8fq70xi"/><path class="re3zbnbhv"/><circle class="i0nnczrvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:visa-check"} {...others} />);
}

export default Component;
