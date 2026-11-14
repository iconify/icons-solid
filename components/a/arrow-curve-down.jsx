import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdau0149r {
  d: path("M4 5.5c7.5 0 12 5 12 13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.koyj9mdsb {
  d: path("M12.5 15.5L16 19l3.5-3.5");
}
</style><g class="hntgybcog"><path class="fdau0149r"/><path class="koyj9mdsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrow-curve-down"} {...others} />);
}

export default Component;
