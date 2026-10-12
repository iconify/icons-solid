import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.czse88b_t {
  d: path("m3.5 8.75l6.25 4.5L16 8.75m2.25-6q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x14fbvbjf {
  width: 14px;
  height: 11.25px;
  x: 2.75px;
  y: 8px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><rect class="x14fbvbjf"/><path class="czse88b_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:email-ai"} {...others} />);
}

export default Component;
