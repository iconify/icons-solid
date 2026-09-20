import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xdef3npmm {
  fill: currentColor;
  d: path("m16.6 13.8l-1.4-1.425L20 7.6L17.4 5l-4.8 4.8l-1.4-1.425L17.4 2.2l5.4 5.4zm-8 5.2l3.8-3.8l-2.6-2.6L6 16.4zm11.2 3.6l-6-6l-4.5 4.5H7.9l-.75-.75l-.65.65h-5l3.15-3.15l-.75-.75v-1.4l4.5-4.5l-7-7l1.425-1.425l18.4 18.4z");
}
</style><path class="xdef3npmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ink-highlighter-off-outline-sharp"} {...others} />);
}

export default Component;
