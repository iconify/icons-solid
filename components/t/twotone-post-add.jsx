import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bocyg_bwf {
  fill: currentColor;
  d: path("M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2z");
}

.fgi612zmg {
  fill: currentColor;
  d: path("M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z");
}
</style><path class="bocyg_bwf"/><path class="fgi612zmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-post-add"} {...others} />);
}

export default Component;
