import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.atgivufmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.753 33.747H14.247C8.865 33.747 4.5 29.383 4.5 24s4.364-9.747 9.747-9.747S24 18.6 24 24s4.37 9.747 9.753 9.747S43.5 29.383 43.5 24s-4.364-9.747-9.747-9.747H14.247");
}
</style><path class="atgivufmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:core"} {...others} />);
}

export default Component;
