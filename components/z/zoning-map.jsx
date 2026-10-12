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

.hoi44xq4a {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.xcrazcbqr {
  d: path("M10 2.75v18.5M10 13h11.25M2.75 9H10m2.5 1.5l6-6m-2.75 6l3-3m-6.25-.25l2.5-2.5");
}
</style><g class="hntgybcog"><rect class="hoi44xq4a"/><path class="xcrazcbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:zoning-map"} {...others} />);
}

export default Component;
