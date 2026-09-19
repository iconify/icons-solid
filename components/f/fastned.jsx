import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hu6nc8bob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.392 22.261L4.855 16.663A1.05 1.05 0 0 0 3.5 17.67v6.788c0 .463.304.872.747 1.006l19.45 5.873c.197.06.409.06.607 0l19.449-5.873c.443-.134.747-.543.747-1.006V17.67c0-.705-.68-1.21-1.355-1.007l-18.537 5.598c-.397.12-.82.12-1.216 0");
}
</style><path class="hu6nc8bob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fastned"} {...others} />);
}

export default Component;
