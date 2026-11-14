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

.nrvukhb2y {
  d: path("M16.5 4.206A9 9 0 1 1 12 3");
}

.wauk053bg {
  d: path("M12 7.5V12l3 1.5");
}
</style><g class="hntgybcog"><path class="nrvukhb2y"/><path class="wauk053bg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ai-history"} {...others} />);
}

export default Component;
