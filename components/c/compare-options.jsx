import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.al4s12btf {
  d: path("M5.125 3h2.75A2.625 2.625 0 0 1 10.5 5.625v12.75A2.625 2.625 0 0 1 7.875 21h-2.75A2.625 2.625 0 0 1 2.5 18.375V5.625A2.625 2.625 0 0 1 5.125 3m11 0h2.75A2.625 2.625 0 0 1 21.5 5.625v12.75A2.625 2.625 0 0 1 18.875 21h-2.75a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 16.125 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pqlbb9zeg {
  d: path("m16 12.5l1.5 1.5l1.5-2.75");
}
</style><g class="hntgybcog"><path class="al4s12btf"/><path class="pqlbb9zeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:compare-options"} {...others} />);
}

export default Component;
