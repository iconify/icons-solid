import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akzn_2afg {
  cx: 7.25px;
  cy: 11.5px;
  r: 2px;
}

.gplilobog {
  d: path("M2.75 5.5v14.75m0-4.25h18v4.25");
}

.h4-4wibbe {
  d: path("M11.75 16v-5.75h9V16M16 3.75v4.5M13.75 6h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gplilobog"/><circle class="akzn_2afg"/><path class="h4-4wibbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hospital-bed-sharp"} {...others} />);
}

export default Component;
