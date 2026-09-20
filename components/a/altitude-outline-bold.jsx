import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.gcbumkb_o {
  d: path("M16.5 5.5 19 3l2.5 2.5");
}

.nh1hchbhr {
  d: path("m3 18 7 -7 7 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tp19rhqzz {
  d: path("M19 3v15");
}
</style><g class="s0phu2bbs"><path class="nh1hchbhr"/><path class="tp19rhqzz"/><path class="gcbumkb_o"/><path class="bod4n0b3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:altitude-outline-bold"} {...others} />);
}

export default Component;
