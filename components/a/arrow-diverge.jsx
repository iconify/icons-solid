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

.jqpc1_rmu {
  d: path("M3.75 12h5c3.5 0 4.25-6 8-6H20M8.75 12c3.5 0 4.25 6 8 6H20");
}

.uxp-y7btg {
  d: path("m17.25 3l3 3l-3 3m0 6l3 3l-3 3");
}
</style><g class="hntgybcog"><path class="jqpc1_rmu"/><path class="uxp-y7btg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-diverge"} {...others} />);
}

export default Component;
