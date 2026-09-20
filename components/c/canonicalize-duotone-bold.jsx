import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4v3t3bns {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 17h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gd8l1w4ql {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 11.5 2 2 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oboujbbaa {
  d: path("m3 5 3 3 3 -3 3 3 3 -3");
}

.ok9ioqb8x {
  d: path("M4 17h16");
}

.rbzpndy-d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 5 3 3 3 -3 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rdidnh2az {
  d: path("m10 11.5 2 2 2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rbzpndy-d"/><path class="gd8l1w4ql"/><path class="d4v3t3bns"/><path class="oboujbbaa"/><path class="rdidnh2az"/><path class="ok9ioqb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:canonicalize-duotone-bold"} {...others} />);
}

export default Component;
