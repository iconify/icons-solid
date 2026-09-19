import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j5k5g5bxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.528 38.806c2.715 1.5 3.797 1.616 7.226 1.616c5.111 0 9.255-4.15 9.255-9.27V26.66m4.204-2.031a9.24 9.24 0 0 0 5.033 1.49c5.11 0 9.254-4.15 9.254-9.27h0c0-5.12-4.143-9.27-9.254-9.27s-9.255 4.15-9.246 9.27s-4.135 9.27-9.246 9.27s-9.254-4.15-9.254-9.27s4.143-9.27 9.254-9.27a9.22 9.22 0 0 1 6.783 2.964");
}
</style><path class="j5k5g5bxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:gochat"} {...others} />);
}

export default Component;
