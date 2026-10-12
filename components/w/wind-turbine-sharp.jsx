import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p1q0e8bjj {
  cx: 12px;
  cy: 10px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrumgrdqr {
  d: path("M11.7 12.75h1.2l.08.6l.94 7.3l.08.6h-4l.08-.6l.94-7.3l.08-.6zm.3-5.5V3m2.38 8.38l3.68 2.12m-8.44-2.12L5.94 13.5");
}
</style><g class="x2cwu0gfd"><path class="xrumgrdqr"/><circle class="p1q0e8bjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wind-turbine-sharp"} {...others} />);
}

export default Component;
