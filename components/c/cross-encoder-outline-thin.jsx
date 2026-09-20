import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ba_a_obvy {
  d: path("m8 16 4 -4");
}

.gig9ivbwc {
  d: path("M2 8h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kfs1394gk {
  d: path("M2 16h6");
}

.rzfubwb2e {
  d: path("M12 12h10");
}

.z5135gcut {
  d: path("m8 8 4 4");
}
</style><g class="hntgybcog"><path class="gig9ivbwc"/><path class="kfs1394gk"/><path class="z5135gcut"/><path class="ba_a_obvy"/><path class="rzfubwb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cross-encoder-outline-thin"} {...others} />);
}

export default Component;
