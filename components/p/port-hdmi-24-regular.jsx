import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ov3--jb7w {
  fill: currentColor;
  d: path("m21.414 11.414l-2.828-2.828A2 2 0 0 0 17.172 8H6.828a2 2 0 0 0-1.414.586l-2.828 2.828A2 2 0 0 0 2 12.828V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1.172a2 2 0 0 0-.586-1.414M20.5 14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-1.172a.5.5 0 0 1 .146-.353l2.829-2.828a.5.5 0 0 1 .353-.147h10.344a.5.5 0 0 1 .353.146l2.829 2.829a.5.5 0 0 1 .146.354zm-4.25-2.75h-8.5a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5");
}
</style><path class="ov3--jb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:port-hdmi-24-regular"} {...others} />);
}

export default Component;
