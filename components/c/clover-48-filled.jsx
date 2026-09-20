import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w_vz7-2ss {
  fill: currentColor;
  d: path("M13.5 4a9.5 9.5 0 1 0 0 19h8.25c.69 0 1.25-.56 1.25-1.25V13.5A9.5 9.5 0 0 0 13.5 4m-.025 40C8.26 44 4 39.774 4 34.55a9.45 9.45 0 0 1 9.45-9.45h8.3c.69 0 1.25.56 1.25 1.25v8.15c0 5.252-4.283 9.5-9.525 9.5M34.5 4a9.5 9.5 0 0 1 0 19h-8.25c-.69 0-1.25-.56-1.25-1.25V13.5A9.5 9.5 0 0 1 34.5 4m0 40a9.5 9.5 0 0 0 0-19h-8.25c-.69 0-1.25.56-1.25 1.25v8.25a9.5 9.5 0 0 0 9.5 9.5");
}
</style><path class="w_vz7-2ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:clover-48-filled"} {...others} />);
}

export default Component;
