import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dumjvqbrp {
  d: path("M5.54 13.58a8.5 6.25 0 1 1 3.37 2.08m-3.37-2.08c.5 1.6.3 3.2-1 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4wjsdyuw {
  cx: 4.25px;
  cy: 19.5px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="dumjvqbrp"/><circle class="y4wjsdyuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lasso"} {...others} />);
}

export default Component;
