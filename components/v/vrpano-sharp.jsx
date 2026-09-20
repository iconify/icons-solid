import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ptyn3bc8y {
  fill: currentColor;
  d: path("M2.025 20.5V3.475q1.875.875 4.5 1.45t5.5.575t5.5-.575t4.5-1.45V20.5q-1.875-.875-4.5-1.437t-5.5-.563t-5.5.563t-4.5 1.437M5.5 15.4q1.625-.2 3.238-.3T12 15t3.263.1t3.237.3L14 10l-2.85 3.4l-2-2.4z");
}
</style><path class="ptyn3bc8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vrpano-sharp"} {...others} />);
}

export default Component;
