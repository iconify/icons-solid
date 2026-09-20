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

.ns_05qbai {
  d: path("m9 11 2 2 4 -4");
}

.qtxvlht3c {
  d: path("M8 17h8");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="ns_05qbai"/><path class="qtxvlht3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:consent-outline-thin"} {...others} />);
}

export default Component;
