import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ftbz_7bwr {
  cx: 24px;
  cy: 30.026px;
  r: 13.474px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i40_lpd2r {
  cx: 24px;
  cy: 28.51px;
  r: 3.546px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jrwtptoqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 35.524v-3.36");
}

.xlv3khbpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.893 15.607a11.107 11.107 0 0 1 22.214 0m0 0v6.683m-22.214-6.683v6.595");
}
</style><circle class="ftbz_7bwr"/><path class="xlv3khbpu"/><circle class="i40_lpd2r"/><path class="jrwtptoqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:secur"} {...others} />);
}

export default Component;
