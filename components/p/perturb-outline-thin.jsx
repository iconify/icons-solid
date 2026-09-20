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

.ozi-k-boi {
  d: path("M3 7h18");
}

.ph2id7bdf {
  d: path("m3 15 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="ozi-k-boi"/><path class="ph2id7bdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:perturb-outline-thin"} {...others} />);
}

export default Component;
