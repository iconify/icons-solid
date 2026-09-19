import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zc-844boc {
  fill: currentColor;
  d: path("M21 4H3v16h18zM11 15H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11zm7 0h-1.75v1.5h-1.5V15H13V9h5zm-3.5-1.5h2v-3h-2z");
}
</style><path class="zc-844boc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-high-quality"} {...others} />);
}

export default Component;
