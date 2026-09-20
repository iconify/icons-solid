import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-i6_ubyt {
  d: path("M3 14c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
}

.i4kf51esh {
  d: path("M19 5v14");
}

.iwg_dsj0c {
  d: path("M16.5 7.5 19 5l2.5 2.5");
}

.ler50rfbf {
  d: path("M9 8v12");
}

.m0f5ny81l {
  d: path("M5 20h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uerippblb {
  d: path("M10 11c0 -3.6 2.4 -6 6 -6 0 3.6 -2.4 6 -6 6");
}
</style><g class="s0phu2bbs"><path class="ler50rfbf"/><path class="b-i6_ubyt"/><path class="uerippblb"/><path class="i4kf51esh"/><path class="iwg_dsj0c"/><path class="m0f5ny81l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:plant-grow-outline-bold"} {...others} />);
}

export default Component;
