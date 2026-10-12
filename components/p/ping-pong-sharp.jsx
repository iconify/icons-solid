import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.neks5ib7s {
  cx: 18.25px;
  cy: 19px;
  r: 1.75px;
}

.t_6u2pibf {
  d: path("M10.25 16.02a6.75 6.75 0 1 1 3.5 0v5.23h-3.5v-1.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t_6u2pibf"/><circle class="neks5ib7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ping-pong-sharp"} {...others} />);
}

export default Component;
