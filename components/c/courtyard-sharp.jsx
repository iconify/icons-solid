import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dcgw77bis {
  cx: 12px;
  cy: 12px;
  r: 1.5px;
}

.sp4i2cbja {
  d: path("M9.65 21.25h-6.9V2.75h18.5v18.5h-7.5V17.5h3.75v-11h-11v11h3.75v3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sp4i2cbja"/><circle class="dcgw77bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:courtyard-sharp"} {...others} />);
}

export default Component;
