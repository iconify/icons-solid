import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yaa0mvn2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.04 17.003A9.75 9.75 0 1 0 24 24m2.96 6.997A9.75 9.75 0 1 0 24 24m0 0h-9.75");
}
</style><path class="yaa0mvn2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:toya-go"} {...others} />);
}

export default Component;
