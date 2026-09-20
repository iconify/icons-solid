import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.acx2mjbnt {
  d: path("M12 11v6");
}

.gwny-o4ct {
  d: path("M2 20V6h7l2 2h11v12Z");
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.rd3_-g5sv {
  fill: currentColor;
  d: path("M2 20V6h7l2 2h11v12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rd3_-g5sv"/><path class="gwny-o4ct"/><path class="acx2mjbnt"/><path class="ikiprn9sq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:medical-record-duotone-bold"} {...others} />);
}

export default Component;
