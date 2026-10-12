import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0pveubrp {
  cx: 6px;
  cy: 6.25px;
  r: 3.25px;
}

.e4bskll8f {
  d: path("m8.6 8.2l11.65 9.3M8.6 15.8l11.65-9.3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ptricrbgn {
  cx: 6px;
  cy: 17.75px;
  r: 3.25px;
}
</style><g class="hntgybcog"><circle class="c0pveubrp"/><circle class="ptricrbgn"/><path class="e4bskll8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:scissors"} {...others} />);
}

export default Component;
