import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h5d3tzpwt {
  cx: 32.318px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.934px;
  ry: 10.479px;
}

.r1-yc_buy {
  cx: 42.339px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.161px;
  ry: 10.479px;
}

.y9wlq-ata {
  cx: 13.979px;
  cy: 24px;
  r: 10.479px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="y9wlq-ata"/><ellipse class="h5d3tzpwt"/><ellipse class="r1-yc_buy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:medium-alt"} {...others} />);
}

export default Component;
