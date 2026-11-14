import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ge_dpt41v {
  d: path("M14 3.5c1.75 0 2.5 1 2.75 2c1.75 0 2 2.5.5 3.25l-1-1c.75 2.75-.25 6-3.25 7.75L5 21l3-5c.5-4 1-8 2-10c.75-1.75 2.25-2.5 4-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1l2kj4tx {
  d: path("m13 15.5l1 2h6.5m-6.75-11h.01");
}
</style><g class="hntgybcog"><path class="ge_dpt41v"/><path class="z1l2kj4tx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:budgerigar"} {...others} />);
}

export default Component;
