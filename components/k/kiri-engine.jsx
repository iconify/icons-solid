import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.at25pwb0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 9.551h9.392V38.45H4.5zm9.392.973a10.12 10.12 0 0 0 10.068 9.141c5.581 0 10.114-4.532 10.114-10.114H43.5c0 10.785-8.756 19.54-19.54 19.54c-3.682 0-7.127-1.02-10.068-2.792z");
}

.fm2wp9buj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.11 24.001A19.5 19.5 0 0 1 43.5 38.45h-9.426a10.12 10.12 0 0 0-6.885-9.587a19.5 19.5 0 0 0 9.922-4.86");
}
</style><path class="at25pwb0b"/><path class="fm2wp9buj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kiri-engine"} {...others} />);
}

export default Component;
