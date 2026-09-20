import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.fm0a3cc_b {
  fill: currentColor;
  d: path("M24.25 14a.75.75 0 0 1 .51 1.3L19 20.648v2.602A2.75 2.75 0 0 1 16.25 26h-4.5A2.75 2.75 0 0 1 9 23.25v-2.602L3.24 15.3a.751.751 0 0 1 .51-1.3zm-7.997-3.5A2.75 2.75 0 0 1 18.99 13H9.016a2.75 2.75 0 0 1 2.737-2.5zM14 2a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7");
}
</style><path class="fm0a3cc_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presenter-28-filled"} {...others} />);
}

export default Component;
