import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tr48w-lul {
  fill: currentColor;
  d: path("M11 5V3h2v2zm0 16v-2h2v2zM7 5V3h2v2zm0 16v-2h2v2zM3 5V3h2v2zm0 4V7h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm12 0v-2h2V5h-2V3h6v2h-2v14h2v2z");
}
</style><path class="tr48w-lul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-select-end-outline-sharp"} {...others} />);
}

export default Component;
