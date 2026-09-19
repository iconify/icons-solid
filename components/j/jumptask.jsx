import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uja1d4fsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.878 4.5v31.122a7.878 7.878 0 0 1-15.756 0V14.355");
}

.zilou829v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.223 17.254l2.899-2.899l2.899 2.899m9.958-9.855L31.878 4.5l2.899 2.899");
}
</style><path class="uja1d4fsn"/><path class="zilou829v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:jumptask"} {...others} />);
}

export default Component;
