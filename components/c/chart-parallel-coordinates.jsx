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

.jug4q_r3a {
  d: path("m3.5 17.5l8.5-9l8.5 7");
}

.w-4-9m5pi {
  d: path("M3.5 3v18M12 3v18m8.5-18v18M3.5 6.5l8.5 10L20.5 8");
}
</style><g class="hntgybcog"><path class="w-4-9m5pi"/><path class="jug4q_r3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-parallel-coordinates"} {...others} />);
}

export default Component;
