import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dg3b7_b0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.6 14.764h21.883V41.12a2.38 2.38 0 0 1-2.38 2.38H14.98a2.38 2.38 0 0 1-2.38-2.38z");
}

.r1zn0hbho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.326 8.011V4.5h7.348v3.511M17.59 35.083l11.903-11.902m-11.903 0l11.903 11.902");
}

.rhdmcnble {
  width: 27.574px;
  height: 6.753px;
  x: 10.213px;
  y: 8.011px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}
</style><path class="dg3b7_b0p"/><rect class="rhdmcnble"/><path class="r1zn0hbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:multi-app-uninstaller"} {...others} />);
}

export default Component;
