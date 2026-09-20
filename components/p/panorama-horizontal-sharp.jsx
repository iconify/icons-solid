import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rxtdvmbvh {
  fill: currentColor;
  d: path("M2.025 20.5V3.475q1.875.875 4.5 1.45t5.5.575t5.5-.575t4.5-1.45V20.5q-1.875-.875-4.5-1.437t-5.5-.563t-5.5.563t-4.5 1.437");
}
</style><path class="rxtdvmbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:panorama-horizontal-sharp"} {...others} />);
}

export default Component;
