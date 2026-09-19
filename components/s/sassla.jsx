import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uy84dzb5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 20.015a10 10 0 0 1 10-10m-5 10a5 5 0 0 1 5-5M5.5 28.5h6.654l4.33-7.5l3.67 7.5L23 7l4.5 34l3.846-18l4.33 7.5H42.5");
}
</style><path class="uy84dzb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sassla"} {...others} />);
}

export default Component;
