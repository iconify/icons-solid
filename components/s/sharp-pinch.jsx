import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mh5rrv2tq {
  fill: currentColor;
  d: path("M23.18 15.4L22.1 23h-9L8 17.62l1.22-1.23l3.78.85V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38zM6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5z");
}
</style><path class="mh5rrv2tq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-pinch"} {...others} />);
}

export default Component;
