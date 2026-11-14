import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.co5f-9f-m {
  d: path("M3.5 3L11 5v14.5L3.5 21m5-8.5h.01m6.24 5.5l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.quer7mv9q {
  d: path("M3.5 21V3h12v12.3");
}
</style><g class="hntgybcog"><path class="quer7mv9q"/><path class="co5f-9f-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gym-check-in"} {...others} />);
}

export default Component;
