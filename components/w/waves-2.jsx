import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.srmlhsspr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 26c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 26 4.5 26m39 10c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 36 4.5 36m39-20c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 16 4.5 16");
}
</style><path class="srmlhsspr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:waves-2"} {...others} />);
}

export default Component;
