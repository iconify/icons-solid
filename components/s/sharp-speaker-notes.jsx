import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.caj0xxbph {
  fill: currentColor;
  d: path("M22 2H2.01L2 22l4-4h16zM8 14H6v-2h2zm0-3H6V9h2zm0-3H6V6h2zm7 6h-5v-2h5zm3-3h-8V9h8zm0-3h-8V6h8z");
}
</style><path class="caj0xxbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-speaker-notes"} {...others} />);
}

export default Component;
