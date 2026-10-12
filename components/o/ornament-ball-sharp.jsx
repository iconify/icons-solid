import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q48h0ehee {
  d: path("m5.75 13.25l2.1 1.5l2.05-1.5l2.1 1.5l2.1-1.5l2.05 1.5l2.1-1.5M8 9.75h8");
}

.qf9qeni6m {
  d: path("M11 3.75v-1h2v1m-3.25.5h4.5v2.5h-4.5z");
}

.r6uvok62f {
  cx: 12px;
  cy: 14px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qf9qeni6m"/><circle class="r6uvok62f"/><path class="q48h0ehee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ornament-ball-sharp"} {...others} />);
}

export default Component;
