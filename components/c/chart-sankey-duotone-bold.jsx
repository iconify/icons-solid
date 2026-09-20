import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6785mbmg {
  d: path("M4 18h6l4 -4h6");
}

.eu5y313ev {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 6h6l4 4h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kwjdobceu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 18h6l4 -4h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s4m8c10_q {
  d: path("M4 6h6l4 4h6");
}
</style><g class="s0phu2bbs"><path class="eu5y313ev"/><path class="kwjdobceu"/><path class="s4m8c10_q"/><path class="d6785mbmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:chart-sankey-duotone-bold"} {...others} />);
}

export default Component;
