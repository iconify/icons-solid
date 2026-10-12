import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efs8xfsoz {
  cx: 4.75px;
  cy: 18px;
  r: 1.75px;
}

.hft84rbnc {
  cx: 19.25px;
  cy: 18px;
  r: 1.75px;
}

.i87l21lle {
  cx: 19.25px;
  cy: 12.25px;
  r: 1.75px;
}

.o19ergbhs {
  cx: 12px;
  cy: 12.25px;
  r: 1.75px;
}

.pftf-cbrq {
  cx: 12px;
  cy: 6.5px;
  r: 1.75px;
}

.wmzeeu32g {
  cx: 12px;
  cy: 18px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="efs8xfsoz"/><circle class="wmzeeu32g"/><circle class="o19ergbhs"/><circle class="pftf-cbrq"/><circle class="i87l21lle"/><circle class="hft84rbnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-dot-plot-sharp"} {...others} />);
}

export default Component;
