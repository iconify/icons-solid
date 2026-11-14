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

.hs0n8kbwk {
  d: path("m14 5.75l2.75 2.75L14 11.25");
}

.mmqsyeb9y {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v4a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 10.5v-4A3.5 3.5 0 0 1 6.5 3M12 14v7.5m-5.5-13h10.25");
}
</style><g class="hntgybcog"><path class="mmqsyeb9y"/><path class="hs0n8kbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:entrance-sign"} {...others} />);
}

export default Component;
