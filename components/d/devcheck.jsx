import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dxpm0udmg {
  cx: 24.799px;
  cy: 13.973px;
  r: 2.86px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tt2-byrmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.885 22.726c2.313-1.313 5.31-2.691 7-2.691c1.64 0-4.255 16.852-3.1 16.852a11.75 11.75 0 0 0 6.874-2.673");
}
</style><path class="tt2-byrmn"/><circle class="dxpm0udmg"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:devcheck"} {...others} />);
}

export default Component;
