import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7q8jib6e {
  cx: 12px;
  cy: 7.25px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tz8d1icpz {
  d: path("M12 12v4.25m-2.5 5l2.5-5l2.5 5M7 5l1.25 5.5L12 12l3.75-1.5L17 5M4.75 13.5q.24 1.76 2 2q-1.76.24-2 2q-.24-1.76-2-2q1.76-.24 2-2m14.5 0q.24 1.76 2 2q-1.76.24-2 2q-.24-1.76-2-2q1.76-.24 2-2");
}
</style><g class="hntgybcog"><circle class="a7q8jib6e"/><path class="tz8d1icpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:person-celebrating"} {...others} />);
}

export default Component;
