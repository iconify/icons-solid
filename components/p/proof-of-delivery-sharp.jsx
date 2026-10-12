import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cno_ao1fv {
  d: path("M2.75 2.75h12.5v18.5H2.75zM6 7h6m-6 3.5h6M6 14h3");
}

.l12gfwbwm {
  d: path("m15.25 17l1.25 1.25l2.25-2.5");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cno_ao1fv"/><circle class="upu83lbfh"/><path class="l12gfwbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:proof-of-delivery-sharp"} {...others} />);
}

export default Component;
