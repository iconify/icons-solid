import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2hd4ubib {
  d: path("M8.75 5.75a6 6 0 1 0 6 6h-6Z");
}

.px3vvqhil {
  cx: 18.75px;
  cy: 18.75px;
  r: 2.5px;
}

.s7y2fi7md {
  d: path("M11.75 2.75a6 6 0 0 1 6 6h-6Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="j2hd4ubib"/><path class="s7y2fi7md"/><circle class="px3vvqhil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:budget-pie-sharp"} {...others} />);
}

export default Component;
