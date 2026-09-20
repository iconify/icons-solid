import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jqk23rbkc {
  fill: currentColor;
  d: path("M232 40a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h168a8 8 0 0 1 8 8m-48 32a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8m-16 32a8 8 0 0 0-8-8H56a8 8 0 0 0 0 16h104a8 8 0 0 0 8-8m16 32a8 8 0 0 0-8-8H88a8 8 0 0 0 0 16h88a8 8 0 0 0 8-8m0 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-24 32h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m-32 32h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16");
}
</style><path class="jqk23rbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tornado"} {...others} />);
}

export default Component;
