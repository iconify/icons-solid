import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvqjmzkvp {
  d: path("M5.75 7.75v4.5m12.5-4.5v4.5m-15 0h17.5m-14.5 0l11.5 9m0-9l-11.5 9");
}

.d8e_h-pqw {
  width: 15.5px;
  height: 5px;
  x: 4.25px;
  y: 2.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="d8e_h-pqw"/><path class="bvqjmzkvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:director-chair"} {...others} />);
}

export default Component;
