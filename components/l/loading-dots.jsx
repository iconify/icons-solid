import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rl6_-6k4x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 9.5q-2.5 0-2.5 2.5T5 14.5T7.5 12T5 9.5M9.5 12q0-2.5 2.5-2.5q1.036 0 1.768.732T14.5 12t-.732 1.768T12 14.5q-2.5 0-2.5-2.5m7 0q0-2.5 2.5-2.5t2.5 2.5t-2.5 2.5t-2.5-2.5");
}
</style><path class="rl6_-6k4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:loading-dots"} {...others} />);
}

export default Component;
