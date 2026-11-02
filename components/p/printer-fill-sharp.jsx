import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.twf2clb8s {
  fill: currentColor;
  d: path("M21 6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3Zm-4-2H7v2h10Zm-7 6a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2ZM7 20h10v-2H7Z");
}
</style><path class="twf2clb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:printer-fill-sharp"} {...others} />);
}

export default Component;
