import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayqgw4bzo {
  cx: 8.75px;
  cy: 10.5px;
  r: 2px;
}

.cmdt0kehn {
  d: path("M4.25 10.5C4.25 6 7.75 3 12 3s7.75 3 7.75 7.5V13l-2.25 1.75v1.5h-11v-1.5L4.25 13Z");
}

.hmtrbg1-p {
  cx: 15.25px;
  cy: 10.5px;
  r: 2px;
}

.l_xip7boa {
  d: path("m9 17.25l1.5 1.65v.85a1.5 1.5 0 0 1-3 0v-.85zm6 0l1.5 1.65v.85a1.5 1.5 0 0 1-3 0v-.85z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cmdt0kehn"/><circle class="ayqgw4bzo"/><circle class="hmtrbg1-p"/><path class="l_xip7boa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:toxic-skull-sharp"} {...others} />);
}

export default Component;
