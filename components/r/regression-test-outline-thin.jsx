import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.eq_vveyyh {
  d: path("m8 17 2 2 5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s-p0nrawj {
  d: path("m8 10 2 2 5 -5");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="s-p0nrawj"/><path class="eq_vveyyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:regression-test-outline-thin"} {...others} />);
}

export default Component;
