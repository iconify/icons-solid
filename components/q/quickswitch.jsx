import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k2p_ujbyr {
  width: 17.249px;
  height: 33.211px;
  x: 15.375px;
  y: 7.395px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.065px;
}

.p48m-sb-m {
  width: 7.195px;
  height: 28.398px;
  x: 4.5px;
  y: 9.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.065px;
}

.rn5b5cb4i {
  width: 7.195px;
  height: 28.398px;
  x: 36.305px;
  y: 9.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.065px;
}
</style><rect class="k2p_ujbyr"/><rect class="p48m-sb-m"/><rect class="rn5b5cb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:quickswitch"} {...others} />);
}

export default Component;
