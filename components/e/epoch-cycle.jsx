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

.rjxgisbjn {
  d: path("m10.25 9.75l2-1.5v7.5");
}

.tsa_9enlo {
  d: path("M19.75 12a7.75 7.75 0 1 1-2.27-5.48m.27-3.77v4h-4");
}
</style><g class="hntgybcog"><path class="tsa_9enlo"/><path class="rjxgisbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:epoch-cycle"} {...others} />);
}

export default Component;
