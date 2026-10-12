import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpuhw68im {
  cx: 11.25px;
  cy: 7px;
  r: 1.5px;
}

.dc1vmo-aa {
  d: path("M4.75 21.25V2.75h14.5v18.5m-16.5 0h18.5");
}

.hfdjq2bct {
  d: path("M11.25 10v4h3.5L16 17.25M8.9 12.4a3.5 3.5 0 1 0 4.6 4.85");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dc1vmo-aa"/><circle class="bpuhw68im"/><path class="hfdjq2bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:accessible-door-sharp"} {...others} />);
}

export default Component;
