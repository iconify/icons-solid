import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mss0wg22n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5v14.5H2.75zm0 4.25h18.5M6.5 14.5H12");
}

.qhx66-4er {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 12.5v4");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vrxzsk89v {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 14.5h.01");
}
</style><g class="ux2u0rbkq"><path class="mss0wg22n"/><path class="vrxzsk89v"/><path class="qhx66-4er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:credit-limit-sharp"} {...others} />);
}

export default Component;
