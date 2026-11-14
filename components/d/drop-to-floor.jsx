import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sc9a6k99a {
  d: path("m12.728 2.905l3 1.666a1.5 1.5 0 0 1 .772 1.312v3.234a1.5 1.5 0 0 1-.772 1.312l-3 1.666a1.5 1.5 0 0 1-1.456 0l-3-1.666A1.5 1.5 0 0 1 7.5 9.117V5.883a1.5 1.5 0 0 1 .772-1.312l3-1.666a1.5 1.5 0 0 1 1.456 0");
}

.vx74dnv0j {
  d: path("M7.5 5L12 7.5L16.5 5M12 7.5v5m0 2.75V18m-2-2l2 2l2-2M3 20.75h18");
}
</style><g class="hntgybcog"><path class="sc9a6k99a"/><path class="vx74dnv0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drop-to-floor"} {...others} />);
}

export default Component;
