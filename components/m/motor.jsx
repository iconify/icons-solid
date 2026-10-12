import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asfmwib5x {
  width: 12.5px;
  height: 11.5px;
  x: 3.75px;
  y: 6.25px;
  rx: 2.5px;
}

.d-zgbzbgn {
  d: path("m10.5 8.75l-2 3.5h3l-2 3.5M16.25 12h5m-14.5 5.75v2.5m6.5-2.5v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="asfmwib5x"/><path class="d-zgbzbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:motor"} {...others} />);
}

export default Component;
