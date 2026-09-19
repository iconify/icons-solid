import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kwo9mmu7l {
  fill: currentColor;
  d: path("M22 13v5h-5l1 1v2H6v-2l1-1H2V3h10v2H4v11h16v-3zm-7 2l-5-5h4V3h2v7h4z");
}
</style><path class="kwo9mmu7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-browser-updated"} {...others} />);
}

export default Component;
