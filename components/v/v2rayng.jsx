import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wjbn4sugp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.619 41.487V10.614H5.5V6.542h10.264v14.394c.696-.64 1.287-1.18 1.873-1.725L28.18 9.385c.942-.878 1.877-1.763 2.83-2.627c.144-.13.371-.238.56-.239c3.567-.013 10.93 0 10.93 0C31.545 18.156 20.628 29.793 9.619 41.488");
}
</style><path class="wjbn4sugp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:v2rayng"} {...others} />);
}

export default Component;
