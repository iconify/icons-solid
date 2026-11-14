import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ii_jygvmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.17 18.053L13 19.5L10.5 18L8 19.5L5.75 18L3.5 19.5v-17h14v9.2M7 7h7m-7 4h4m7 3.5V18m0 3h.01");
}
</style><path class="ii_jygvmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:invoice-dispute"} {...others} />);
}

export default Component;
