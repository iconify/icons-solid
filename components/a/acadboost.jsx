import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hzcx1f3no {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  d: path("M23.9 42.5V12h9.6c4.2 0 7.6 3.4 7.6 7.6s-3.4 7.6-7.6 7.6v0M5.9 42.4L27.7 5.5m-4.5 1.1l4.5-1.1l1.2 4.5");
}

.pyqsocc1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  d: path("M33.5 27.2H14.8m19.7 0c4.2 0 7.6 3.4 7.6 7.6s-3.4 7.6-7.6 7.6H23.9");
}
</style><path class="pyqsocc1z"/><path class="hzcx1f3no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:acadboost"} {...others} />);
}

export default Component;
