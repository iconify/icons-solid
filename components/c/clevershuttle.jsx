import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cmy2wt5xf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.5 8.5H20C11.44 8.5 4.5 15.44 4.5 24S11.44 39.5 20 39.5h8V29.167h-8a5.167 5.167 0 1 1 0-10.333h8V8.5L43.5 24L29.768 37.733");
}
</style><path class="cmy2wt5xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:clevershuttle"} {...others} />);
}

export default Component;
