import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ax416ervf {
  fill-rule: evenodd;
  d: path("M11.35 3h1.368v3.02a6.024 6.024 0 0 1 0 11.96V21h-1.369v-3.011a6.024 6.024 0 0 1 0-11.977zm0 4.392a4.655 4.655 0 0 0 0 9.217zm1.368 9.207a4.655 4.655 0 0 0 0-9.197z");
}
</style><path clip-rule="evenodd" class="ax416ervf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:fluence"} {...others} />);
}

export default Component;
