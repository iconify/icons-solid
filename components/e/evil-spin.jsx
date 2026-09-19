import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cxr768bab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.099 14.5H20.9l2.6-4.501zm-3.599 15L21 43m5.5-14L32 41.5m-2.5-15l11 8.5M31 22h14m-26.5 6l-8 10.5m5.5-14l-13 4m13-9l-13-4m16 .5L10.5 5");
}

.jbntt5nml {
  cx: 23.5px;
  cy: 22px;
  r: 7.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jbntt5nml"/><path class="cxr768bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:evil-spin"} {...others} />);
}

export default Component;
