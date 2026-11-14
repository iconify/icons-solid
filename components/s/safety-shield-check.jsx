import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwzceryzj {
  d: path("m7.75 12.25l3 3l5.5-5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8j3vhbtl {
  d: path("M12 2.5c2.5 1.5 5 2 7.5 2v7c0 5-3.5 8.25-7.5 10c-4-1.75-7.5-5-7.5-10v-7c2.5 0 5-.5 7.5-2");
}
</style><g class="hntgybcog"><path class="p8j3vhbtl"/><path class="gwzceryzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:safety-shield-check"} {...others} />);
}

export default Component;
