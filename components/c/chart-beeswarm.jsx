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

.sukohubkj {
  d: path("M2.5 20.5h19");
}

.uzu2glbys {
  fill: currentColor;
  d: path("M2.25 11a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m3-1.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m3-5.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m3-8.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m3-8.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m3-5.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m0 3.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m3-1.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0");
}
</style><g class="hntgybcog"><path class="sukohubkj"/><path class="uzu2glbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-beeswarm"} {...others} />);
}

export default Component;
