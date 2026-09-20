import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntep9b9h {
  d: path("M8 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.nw0y-0bem {
  d: path("M17 3v4");
}

.ojk--hbsz {
  d: path("M3 11a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s5lnycqks {
  d: path("M7 3v4");
}
</style><g class="s0phu2bbs"><path class="ojk--hbsz"/><path class="hntep9b9h"/><path class="s5lnycqks"/><path class="i2-ny_bzf"/><path class="nw0y-0bem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:home-heater-outline-bold"} {...others} />);
}

export default Component;
