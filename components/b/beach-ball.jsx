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

.lx9cp9byq {
  d: path("M5 9.75a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}

.u6rng2b-y {
  d: path("M12 2.75c-3.5 3-3.5 11 0 14m0-14c3.5 3 3.5 11 0 14m-9 4q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><g class="hntgybcog"><path class="lx9cp9byq"/><path class="u6rng2b-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:beach-ball"} {...others} />);
}

export default Component;
