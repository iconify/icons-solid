import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avdamgajo {
  d: path("M6 21a6 6 0 0 1 12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jds7y1b0v {
  d: path("M7 8a1.5 1.5 0 0 1 1.5 -1.5h7A1.5 1.5 0 0 1 17 8a1.5 1.5 0 0 1 -1.5 1.5h-7A1.5 1.5 0 0 1 7 8");
}

.ufzn_r3vk {
  d: path("M9 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="ufzn_r3vk"/><path class="avdamgajo"/><path class="jds7y1b0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:anonymise-outline-thin"} {...others} />);
}

export default Component;
