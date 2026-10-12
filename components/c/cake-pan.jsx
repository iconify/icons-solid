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

.i607cjbzn {
  d: path("M2.75 9.5a9.25 3.75 0 0 1 18.5 0V16a9.25 3.75 0 0 1-18.5 0Z");
}

.oxn425hfr {
  d: path("M2.75 9.5a9.25 3.75 0 0 0 18.5 0m-11 7h3.5");
}
</style><g class="hntgybcog"><path class="i607cjbzn"/><path class="oxn425hfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cake-pan"} {...others} />);
}

export default Component;
