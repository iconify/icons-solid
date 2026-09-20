import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-6kk-b5z {
  d: path("M14 10v6");
}

.tgy_1xytp {
  d: path("M10 10v6");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="tgy_1xytp"/><path class="i-6kk-b5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:suppression-rule-outline-thin"} {...others} />);
}

export default Component;
