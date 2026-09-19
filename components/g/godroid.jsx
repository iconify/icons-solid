import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.acp2_7rlu {
  cx: 10.189px;
  cy: 19.354px;
  r: 4.604px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.df3vifhuz {
  cx: 37.811px;
  cy: 28.689px;
  r: 4.604px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fpat8cnbd {
  cx: 37.811px;
  cy: 10.104px;
  r: 4.604px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j1nq8vb3j {
  cx: 28.604px;
  cy: 37.896px;
  r: 4.604px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ntxmracxf {
  cx: 19.396px;
  cy: 28.689px;
  r: 4.604px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rqe7labqq {
  cx: 19.396px;
  cy: 10.104px;
  r: 4.604px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.slhptacgt {
  cx: 28.604px;
  cy: 28.689px;
  r: 4.604px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.usr30dbbe {
  cx: 28.604px;
  cy: 28.689px;
  r: 2.179px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z06d2jbwv {
  cx: 37.811px;
  cy: 37.896px;
  r: 4.604px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ntxmracxf"/><circle class="rqe7labqq"/><circle class="fpat8cnbd"/><circle class="acp2_7rlu"/><circle class="df3vifhuz"/><circle class="slhptacgt"/><circle class="z06d2jbwv"/><circle class="j1nq8vb3j"/><circle class="usr30dbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:godroid"} {...others} />);
}

export default Component;
