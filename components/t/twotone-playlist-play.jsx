import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.obf8cbbsy {
  fill: currentColor;
  d: path("M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z");
}
</style><path class="obf8cbbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-playlist-play"} {...others} />);
}

export default Component;
