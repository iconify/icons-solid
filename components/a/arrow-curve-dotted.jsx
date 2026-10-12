import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhg2ekjvz {
  d: path("m13 8.75l4-4l4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj83ecbdh {
  d: path("M3.75 19.25c8 0 13.25-4.75 13.25-14.5");
}
</style><g class="hntgybcog"><path class="xj83ecbdh"/><path class="bhg2ekjvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-curve-dotted"} {...others} />);
}

export default Component;
