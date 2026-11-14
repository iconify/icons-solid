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

.jpombbjnt {
  d: path("M3 18.5h12a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h12");
}

.u7bhvi1sx {
  d: path("M5.5 16L3 18.5L5.5 21m13-19L21 4.5L18.5 7");
}
</style><g class="hntgybcog"><path class="jpombbjnt"/><path class="u7bhvi1sx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:route-reverse"} {...others} />);
}

export default Component;
