import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rd4_k9p5m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.35 3.97l6.05 6.56q1.35 1.47 0 2.94l-6.05 6.56q-1.35 1.47-2.7 0L4.6 13.47q-1.35-1.47 0-2.94l6.05-6.56q1.35-1.47 2.7 0");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="rd4_k9p5m"/><path class="to8m3ibcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rhombus"} {...others} />);
}

export default Component;
