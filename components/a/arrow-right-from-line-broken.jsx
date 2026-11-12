import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjr4uf7pk {
  d: path("M3 4L3 8M3 12L3 20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymvg5pbqm {
  d: path("M8 12L21 12M16.625 8L21 12L16.625 16");
}
</style><g class="hntgybcog"><path class="bjr4uf7pk"/><path class="ymvg5pbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-from-line-broken"} {...others} />);
}

export default Component;
