import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvt-woblq {
  d: path("M22 2L15 9M15 3.14286V9H20.8571");
}

.ebs-wtr1f {
  d: path("M9 20.8571V15H3.14286M9 15L5.5 18.5M2 22L2.875 21.125");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ebs-wtr1f"/><path class="bvt-woblq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-broken"} {...others} />);
}

export default Component;
