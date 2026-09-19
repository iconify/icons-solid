import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f57kq49xg {
  cx: 24px;
  cy: 29.818px;
  r: 11.108px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ohp5h9byg {
  cx: 24px;
  cy: 29.818px;
  r: 0.75px;
  fill: currentColor;
}

.pqeal8b_w {
  cx: 12.678px;
  cy: 11.995px;
  r: 2.439px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rdnwuh_sh {
  cx: 20.622px;
  cy: 26.439px;
  r: 2.117px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uhn09chlb {
  cx: 24px;
  cy: 24px;
  r: 21.327px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x1_b_8xhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.009 8.832c-1.925 1.397-2.177 5.939.767 7.411s5.803.42 7.318-1.598s11.143-13.113 18.293-8.68");
}
</style><circle class="uhn09chlb"/><circle class="f57kq49xg"/><path class="x1_b_8xhh"/><circle class="pqeal8b_w"/><circle class="rdnwuh_sh"/><circle class="ohp5h9byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:camera360"} {...others} />);
}

export default Component;
