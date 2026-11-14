import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wgny0zw6y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.748 8.747l9.319-4.11q1.566-.69 2.776.52t.52 2.775l-4.111 9.321q-.603 1.372-2.098 1.256t-1.88-1.566l-.739-2.77q-.149-.559-.708-.708l-2.771-.739q-1.449-.385-1.565-1.88t1.256-2.098");
}
</style><path class="wgny0zw6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:location-arrow"} {...others} />);
}

export default Component;
