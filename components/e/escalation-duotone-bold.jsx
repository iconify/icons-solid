import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ext7qtobs {
  d: path("M3 19h5v-5h5V9h6");
}

.gj9my0bph {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 19h5v-5h5V9h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ia95t8sod {
  d: path("m16 6 3 3 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xgx-opjvu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 6 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="gj9my0bph"/><path class="xgx-opjvu"/><path class="ext7qtobs"/><path class="ia95t8sod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:escalation-duotone-bold"} {...others} />);
}

export default Component;
