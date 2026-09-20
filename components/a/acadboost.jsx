import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hsxa9b55r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  d: path("M33.5 27.2H14.8m19.7 0zc4.2 0 7.6 3.4 7.6 7.6s-3.4 7.6-7.6 7.6H23.9");
}

.w5y2vnd2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  d: path("M23.9 42.5V12h9.6c4.2 0 7.6 3.4 7.6 7.6s-3.4 7.6-7.6 7.6M5.9 42.4L27.7 5.5m-4.5 1.1l4.5-1.1l1.2 4.5");
}
</style><path class="hsxa9b55r"/><path class="w5y2vnd2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:acadboost"} {...others} />);
}

export default Component;
