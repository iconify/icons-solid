import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzaw6h27o {
  stroke-opacity: 0.4;
  d: path("M3 7L21 7M17 3L21 7L17 11");
}

.ltlsc9bmo {
  d: path("M21 17L3 17M7 21L3 17L7 13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hzaw6h27o"/><path class="ltlsc9bmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-right-left-duotone"} {...others} />);
}

export default Component;
