import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.idr8lu39n {
  fill: currentColor;
  d: path("M15 5a7 7 0 1 1 0 14H7A5 5 0 0 1 7 9h8a3 3 0 1 1 0 6H8a1 1 0 0 1 0-2h7a1 1 0 0 0 0-2H7a3 3 0 1 0 0 6h8a5 5 0 0 0 0-10H7a1 1 0 0 1 0-2Z");
}
</style><path class="idr8lu39n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paperclip-horizontal-fill-round"} {...others} />);
}

export default Component;
