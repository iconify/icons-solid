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

.sx09waciq {
  d: path("m12.702 4.872l5.294 2.802a1.5 1.5 0 0 1 0 2.652l-5.294 2.802a1.5 1.5 0 0 1-1.404 0l-5.294-2.802a1.5 1.5 0 0 1 0-2.652l5.294-2.802a1.5 1.5 0 0 1 1.404 0");
}

.zaa5jibuh {
  d: path("M7 11.25v4.25c0 1.5 2.25 3 5 3s5-1.5 5-3v-4.25M20.5 9v5");
}
</style><g class="hntgybcog"><path class="sx09waciq"/><path class="zaa5jibuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:graduation-cap"} {...others} />);
}

export default Component;
