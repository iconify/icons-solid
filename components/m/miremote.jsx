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

.njjpggbmo {
  cx: 24px;
  cy: 9.185px;
  r: 0.75px;
  fill: currentColor;
}

.qktfd_b5s {
  cx: 9.184px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}

.vsfa8jbji {
  cx: 24px;
  cy: 38.816px;
  r: 0.75px;
  fill: currentColor;
}

.xiu-_gbjn {
  cx: 38.816px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}

.zj02h_boc {
  cx: 24px;
  cy: 24px;
  r: 7.981px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="zj02h_boc"/><circle class="xiu-_gbjn"/><circle class="njjpggbmo"/><circle class="qktfd_b5s"/><circle class="vsfa8jbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:miremote"} {...others} />);
}

export default Component;
