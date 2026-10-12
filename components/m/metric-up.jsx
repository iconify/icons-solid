import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.erio2v7qq {
  width: 4px;
  height: 8px;
  x: 2.75px;
  y: 13.25px;
  rx: 1px;
}

.gfq8zhbzg {
  d: path("M18 21.25V4.5m-3.25 3L18 4.25l3.25 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uncvak0dc {
  width: 4px;
  height: 12px;
  x: 9px;
  y: 9.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="erio2v7qq"/><rect class="uncvak0dc"/><path class="gfq8zhbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:metric-up"} {...others} />);
}

export default Component;
