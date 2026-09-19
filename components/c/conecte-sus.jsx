import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ongm625kf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 24a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 1 6.5 6.5a6.5 6.5 0 0 0-6.5 6.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 0-6.5-6.5a6.5 6.5 0 1 1 6.5-6.5");
}

.zgdfdvcvt {
  cx: 24px;
  cy: 11px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="zgdfdvcvt"/><path class="ongm625kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:conecte-sus"} {...others} />);
}

export default Component;
