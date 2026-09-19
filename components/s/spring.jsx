import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qccywzxpf {
  width: 12.477px;
  height: 29.242px;
  x: 17.762px;
  y: 0.304px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.238px;
  ry: 6.238px;
}

.zqijeli1g {
  width: 12.477px;
  height: 29.242px;
  x: 17.762px;
  y: 18.454px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.238px;
  ry: 6.238px;
}
</style><rect transform="rotate(60 24 14.925)" class="qccywzxpf"/><rect transform="rotate(60 24 33.075)" class="zqijeli1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:spring"} {...others} />);
}

export default Component;
