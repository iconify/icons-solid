import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lr4o40xhp {
  cx: 32.878px;
  cy: 24px;
  r: 10.622px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yhzr9bcri {
  cx: 10.623px;
  cy: 24.3px;
  r: 2.12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z5_iuibim {
  cx: 10.623px;
  cy: 24.3px;
  r: 6.123px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="z5_iuibim"/><circle class="lr4o40xhp"/><circle class="yhzr9bcri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:resplash"} {...others} />);
}

export default Component;
