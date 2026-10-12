import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.earikv5qp {
  d: path("M10.25 9c-2.75-2-5.5-2.25-7.5-.5c1 2.75 4 3.5 7.5.5m3.5 0c2.75-2 5.5-2.25 7.5-.5c-1 2.75-4 3.5-7.5.5M12 11.5c1.75 0 3 2 3 4.5s-1.25 4.5-3 4.5s-3-2-3-4.5s1.25-4.5 3-4.5m-5.25 5.75l-2 1.25m12.5-1.25l2 1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="e9-7-8-2z"/><path class="earikv5qp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:firefly"} {...others} />);
}

export default Component;
