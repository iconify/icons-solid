import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7o-514hm {
  fill: currentColor;
  d: path("M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07l-4.25 4.24l-2.12-2.12l-1.41 1.41L16.34 19L22 13.34z");
}
</style><path class="e7o-514hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-playlist-add-check"} {...others} />);
}

export default Component;
