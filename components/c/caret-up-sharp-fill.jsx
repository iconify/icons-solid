import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cht9ek43g {
  d: path("M12 6L5 18L19 18L12 6Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y6miyabmr {
  fill: currentColor;
  d: path("M11.544 6.2587L5.0727 17.2159C4.8674 17.5635 5.1213 18 5.5287 18L18.4713 18C18.8787 18 19.1326 17.5635 18.9273 17.2159L12.456 6.2587C12.2523 5.9138 11.7477 5.9138 11.544 6.2587Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="y6miyabmr"/><path class="cht9ek43g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:caret-up-sharp-fill"} {...others} />);
}

export default Component;
