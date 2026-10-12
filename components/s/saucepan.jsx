import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.al80ij1va {
  width: 12px;
  height: 12.75px;
  x: 2.75px;
  y: 8.5px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wv8fhiw3l {
  d: path("M2.75 12h12m0-.5h6.5");
}
</style><g class="hntgybcog"><rect class="al80ij1va"/><path class="wv8fhiw3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:saucepan"} {...others} />);
}

export default Component;
