import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d6-0u5r_n {
  cx: 14px;
  cy: 29px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jt3m7bbyo {
  cx: 34px;
  cy: 19px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.luceg6iis {
  cx: 24px;
  cy: 19px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.m-q8bcrrk {
  cx: 14px;
  cy: 19px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n_lryccvm {
  cx: 34px;
  cy: 29px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xjsi0cl7h {
  cx: 24px;
  cy: 29px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="luceg6iis"/><circle class="jt3m7bbyo"/><circle class="m-q8bcrrk"/><circle class="xjsi0cl7h"/><circle class="n_lryccvm"/><circle class="d6-0u5r_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:drawer-alt-2"} {...others} />);
}

export default Component;
