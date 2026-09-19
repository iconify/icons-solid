import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.an5em3qwf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.01 24.935L4.5 10.792l39 13.325L30.27 36.63l-25.77.579zm20.265-.461l-20.266.461m16.442 3.641l-20.267.461m16.443 3.641l-20.269.461");
}
</style><path class="an5em3qwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:canada-post"} {...others} />);
}

export default Component;
