import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hktjp0b9l {
  d: path("m3.737 10.763l3.526-3.526a1.75 1.75 0 0 1 2.474 0l3.526 3.526a1.75 1.75 0 0 1 0 2.474l-3.526 3.526a1.75 1.75 0 0 1-2.474 0l-3.526-3.526a1.75 1.75 0 0 1 0-2.474");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2_dcfb1x {
  d: path("M12 9.5L15.5 6l6 6l-6 6l-3.5-3.5");
}
</style><g class="hntgybcog"><path class="hktjp0b9l"/><path class="v2_dcfb1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:barfi"} {...others} />);
}

export default Component;
