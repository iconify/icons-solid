import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gu4phnm0x {
  d: path("M11 16L3 16");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jtti8bn6v {
  stroke-linejoin: round;
  d: path("M20 14.5L17.5 17L15 14.5M17.5 17V9");
}

.kfn-_lbds {
  d: path("M12 11L3 11");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.s19aowben {
  d: path("M20 6L3 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="s19aowben"/><path class="gu4phnm0x"/><path class="kfn-_lbds"/><path class="jtti8bn6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-down-minimalistic-line-duotone"} {...others} />);
}

export default Component;
