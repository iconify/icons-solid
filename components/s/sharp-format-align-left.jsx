import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0r0v9brq {
  fill: currentColor;
  d: path("M15 15H3v2h12zm0-8H3v2h12zM3 13h18v-2H3zm0 8h18v-2H3zM3 3v2h18V3z");
}
</style><path class="m0r0v9brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-format-align-left"} {...others} />);
}

export default Component;
