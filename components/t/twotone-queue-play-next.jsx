import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wln_egx2i {
  fill: currentColor;
  d: path("M13 15v-3h3v-2h-3V7h-2v3H8v2h3v3zm5 0l3 3l-3 3l1.5 1.5L24 18l-4.5-4.5zM8 19v2h8v-2h2v-2H3V5h18v8h2V5a2 2 0 0 0-2-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2z");
}
</style><path class="wln_egx2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-queue-play-next"} {...others} />);
}

export default Component;
