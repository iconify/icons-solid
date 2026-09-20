import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ab_clyzfw {
  d: path("M3 14c0 -4 4 -6 9 -6s9 2 9 6c0 3 -4 4 -9 4s-9 -1 -9 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ulpw-dlmu {
  d: path("M7 14c0 -2 2 -3 5 -3s5 1 5 3c0 1.5 -2 2 -5 2s-5 -0.5 -5 -2");
}
</style><g class="hntgybcog"><path class="ab_clyzfw"/><path class="ulpw-dlmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:pet-bed-outline-thin"} {...others} />);
}

export default Component;
