import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k3iskdbsl {
  fill: currentColor;
  d: path("M16.625 13.8L11.2 8.375L17.4 2.2l5.4 5.4zm3.175 8.8l-6-6l-4.5 4.5H7.9l-.75-.75l-.65.65h-5l3.15-3.15l-.75-.75v-1.4l4.5-4.5l-7-7l1.425-1.425l18.4 18.4z");
}
</style><path class="k3iskdbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ink-highlighter-off-sharp"} {...others} />);
}

export default Component;
