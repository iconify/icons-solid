import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o82tddbwb {
  fill: currentColor;
  d: path("M21 3H3v18h18zM11 19H5v-6h6zm0-8H5V5h6zm8 8h-6v-6h6zm0-8h-6V5h6z");
}
</style><path class="o82tddbwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-border-all"} {...others} />);
}

export default Component;
