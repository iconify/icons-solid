import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xltl1rbef {
  fill: currentColor;
  d: path("M0 20v-2h2V3h20v15h2v2zm10-2h4v-1h-4zm-6-3h16V5H4zm8-5");
}
</style><path class="xltl1rbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:laptop-chromebook-outline"} {...others} />);
}

export default Component;
