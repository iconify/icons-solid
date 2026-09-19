import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.arv2z5bno {
  cx: 24px;
  cy: 24px;
  r: 6.17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.b1060nb2k {
  cx: 24px;
  cy: 36.33px;
  r: 6.17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bmfwqs_og {
  cx: 24px;
  cy: 11.67px;
  r: 6.17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.c3ei4cbpw {
  cx: 11.67px;
  cy: 36.33px;
  r: 6.17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.c4jh0ubcp {
  cx: 11.67px;
  cy: 11.67px;
  r: 6.17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.haj_xguvz {
  cx: 11.67px;
  cy: 24px;
  r: 6.17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j9o-aswzm {
  cx: 36.33px;
  cy: 24px;
  r: 6.17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="c4jh0ubcp"/><circle class="haj_xguvz"/><circle class="c3ei4cbpw"/><circle class="bmfwqs_og"/><circle class="arv2z5bno"/><circle class="j9o-aswzm"/><circle class="b1060nb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mubi"} {...others} />);
}

export default Component;
