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

.oojvobb7j {
  d: path("M3 18h18m-2.25-2.25L21 18l-2.25 2.25");
}

.rl0xssn0v {
  d: path("M3 8q2.25-8 4.5 0T12 8t4.5 0T21 8");
}
</style><g class="hntgybcog"><path class="rl0xssn0v"/><path class="oojvobb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:transverse-wave"} {...others} />);
}

export default Component;
