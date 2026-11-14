import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ghqq34bih {
  d: path("M3 2.5V21h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uzc1k5bdu {
  d: path("M6 13c1.5-6 4-6 5.5-1c.75 2.5 1.5 3 2.5 3h2.5V8h5");
}
</style><g class="hntgybcog"><path class="ghqq34bih"/><path class="uzc1k5bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:autotune"} {...others} />);
}

export default Component;
