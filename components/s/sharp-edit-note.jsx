import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mi0it2b8d {
  fill: currentColor;
  d: path("M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13l1.41-1.41l2.12 2.12l-1.41 1.41zm-.71.71l-5.3 5.3V21h2.12l5.3-5.3z");
}
</style><path class="mi0it2b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-edit-note"} {...others} />);
}

export default Component;
