import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.flr8fjbul {
  d: path("M10 9.5 7.5 12l2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q1w67xbec {
  d: path("m14 9.5 2.5 2.5 -2.5 2.5");
}

.v3qgglbcl {
  d: path("M12 9.5v5");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="flr8fjbul"/><path class="q1w67xbec"/><path class="v3qgglbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:xxe-outline-thin"} {...others} />);
}

export default Component;
