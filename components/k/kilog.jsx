import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bejtuibyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.875 25h25m-25-10.25h20");
}

.kgqq504yi {
  cx: 8.875px;
  cy: 25px;
  r: 0.75px;
  fill: currentColor;
}

.lnce9drau {
  cx: 8.875px;
  cy: 14.75px;
  r: 0.75px;
  fill: currentColor;
}

.qjcbgl7fv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.375 4.5l8 39");
}
</style><path class="qjcbgl7fv"/><circle class="kgqq504yi"/><circle class="lnce9drau"/><path class="bejtuibyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kilog"} {...others} />);
}

export default Component;
