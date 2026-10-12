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

.k7cf1gbgu {
  cx: 5.5px;
  cy: 18.5px;
  r: 2.25px;
}

.rpg1xzbon {
  d: path("m9.25 14.75l1.25-1.25m.88-.87l1.25-1.25m.87-.88l1.25-1.25");
}

.yu32qrjqf {
  cx: 18.5px;
  cy: 5.5px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="k7cf1gbgu"/><circle class="yu32qrjqf"/><path class="rpg1xzbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:measure-distance"} {...others} />);
}

export default Component;
