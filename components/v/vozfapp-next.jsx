import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t5ds1cc7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.634 4.5l13.744 39l8.63-8.608l-7.458-22.636zm22.375 30.392l6.357-6.483l-1.99-5.526l-10.077-5.32");
}
</style><path class="t5ds1cc7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vozfapp-next"} {...others} />);
}

export default Component;
