import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqhok2bbj {
  cx: 12px;
  cy: 12px;
  r: 4px;
}

.lbjle3bhg {
  d: path("m13.13 11.02l-.35-.75h-1.94v.86c0 1.22 2.34.61 2.34 1.78v.83h-2.018l-.292-.73M4.48 9.26a8 8 0 0 1 13.65-2.4m.17-1.99l-.17 1.99l-1.99-.17m3.38 8.05a8 8 0 0 1-13.65 2.4m-.17 1.99l.17-1.99l1.99.17");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="aqhok2bbj"/><path class="lbjle3bhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cash-flow-sharp"} {...others} />);
}

export default Component;
