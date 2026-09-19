import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j9ky64bpx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28.75v-14.5m4.328 17.001L40.888 24m-7.138-7.137l-7.251 12.56M29 33.75h14.5m-23.828-2.499L7.112 24m7.138-7.137l7.251 12.56M19 33.75H4.5");
}
</style><path class="j9ky64bpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fable"} {...others} />);
}

export default Component;
