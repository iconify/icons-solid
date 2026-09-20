import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.nif6tdbtb {
  fill: currentColor;
  d: path("M3 6a1 1 0 0 0 0 2h21.997a1 1 0 1 0 0-2zm0 15a1 1 0 1 0 0 2h14.997a1 1 0 1 0 0-2zm-1-9a1 1 0 0 1 1-1h21.997a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h21.997a1 1 0 1 0 0-2z");
}
</style><path class="nif6tdbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-description-28-filled"} {...others} />);
}

export default Component;
