import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hl-uapbht {
  d: path("M15 5a3 3 0 0 1 0 6");
}

.p5dc1z72h {
  d: path("M15 2a6 6 0 0 1 0 12");
}

.qaw_x5ree {
  d: path("M5 17h4");
}

.rzbw9hbaj {
  d: path("M2 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rzbw9hbaj"/><path class="qaw_x5ree"/><path class="hl-uapbht"/><path class="p5dc1z72h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:on-call-outline-bold"} {...others} />);
}

export default Component;
