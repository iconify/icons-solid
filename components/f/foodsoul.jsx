import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rugbt8i7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.311 42.5V12.982h-5.917L24 36.447l-9.394-23.465H8.689V42.5M10.73 9.583a2.041 2.041 0 1 1 2.042-2.041h26.539");
}
</style><path class="rugbt8i7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:foodsoul"} {...others} />);
}

export default Component;
