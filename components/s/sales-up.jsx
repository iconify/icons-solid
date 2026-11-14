import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5vwbp-fb {
  d: path("M7 20.5V17m5 3.5V14m5 6.5V11M4 13l5-5l3.5 2.5l7-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrgdw8bti {
  d: path("M15 3.5h4.5V8");
}
</style><g class="hntgybcog"><path class="e5vwbp-fb"/><path class="vrgdw8bti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sales-up"} {...others} />);
}

export default Component;
