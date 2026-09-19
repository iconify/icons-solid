import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gmam-ib4b {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 14H6v-2h2zm0-3H6V9h2zm0-3H6V6h2zm7 6h-5v-2h5zm3-3h-8V9h8zm0-3h-8V6h8z");
}
</style><path class="gmam-ib4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:speaker-notes"} {...others} />);
}

export default Component;
