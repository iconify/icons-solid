import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.af505gbsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.986 18.597v8.757M30.95 18.65l-4.246 4.25l4.246 4.252");
}

.kojj1-bqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.999 8.015C8.075 8.015 5.5 15.245 5.5 22.85c0 3.107.433 6.15 2.03 8.665c-.143 3.46 1.025 6.795 4.417 8.47c-.91-2.248-1.114-3.767-.914-5.065c2.787 1.715 6.908 2.761 12.966 2.761c15.923 0 18.501-7.227 18.501-14.831c0-7.605-2.578-14.835-18.501-14.835");
}
</style><path class="af505gbsm"/><path class="kojj1-bqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hi-waifu"} {...others} />);
}

export default Component;
