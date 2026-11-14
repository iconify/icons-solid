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

.jbnzih19p {
  d: path("M5.5 5.75a6.5 2.75 0 1 0 13 0a6.5 2.75 0 1 0-13 0");
}

.n41ehcbpp {
  d: path("M5.5 5.75V18.5a6.5 2.5 0 0 0 13 0V5.75m-8 0h3");
}
</style><g class="hntgybcog"><path class="jbnzih19p"/><path class="n41ehcbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:soda-can"} {...others} />);
}

export default Component;
