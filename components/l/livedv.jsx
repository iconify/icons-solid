import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gxpg2acir {
  cx: 36.992px;
  cy: 12.863px;
  r: 4.803px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sc2snj5nn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.51 11.223h-8.813l9.781 8.76l-5.794 4.262l19.08 15.695h6.597s.966-1.368-2.201-3.813s-12.954-10.499-12.954-10.499l5.943-4.633ZM11.111 22.965l-6.535.05a1.99 1.99 0 0 0 .543 1.936L16.763 35.07l5.07-3.248Z");
}
</style><circle class="gxpg2acir"/><path class="sc2snj5nn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:livedv"} {...others} />);
}

export default Component;
