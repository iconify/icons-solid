import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ix-02ms1b {
  cx: 24px;
  cy: 24px;
  r: 5.174px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lezi3zb9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 10.994c-8.788 0-16.32 5.37-19.5 13.006C7.68 31.636 15.212 37.006 24 37.006S40.32 31.636 43.5 24C40.32 16.364 32.788 10.994 24 10.994");
}

.vl9engx2a {
  cx: 24px;
  cy: 24px;
  r: 9.207px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ix-02ms1b"/><circle class="vl9engx2a"/><path class="lezi3zb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nmap-wrapper"} {...others} />);
}

export default Component;
