import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tzule_bln {
  fill: currentColor;
  d: path("M21 3v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9v-4l-2-2V9l2-2V3z");
}
</style><path class="tzule_bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-fort"} {...others} />);
}

export default Component;
