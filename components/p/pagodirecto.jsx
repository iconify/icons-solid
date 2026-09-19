import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.osb08rrfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.714 14.649V4.5l2.205 1.24l2.205-1.24V24m-19.838 9.351V43.5l-2.205-1.24l-2.205 1.24V24");
}

.u1r89jbky {
  cx: 24px;
  cy: 24px;
  r: 12.124px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="u1r89jbky"/><path class="osb08rrfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pagodirecto"} {...others} />);
}

export default Component;
