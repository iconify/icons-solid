import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bt4dvq_na {
  fill: currentColor;
  d: path("M14.4 22L13 20.6l2.6-2.6l-2.6-2.6l1.4-1.4l2.6 2.6l2.6-2.6l1.4 1.4l-2.6 2.6l2.6 2.6l-1.4 1.4l-2.6-2.6zM3 16v-2h7v2zm0-4v-2h11v2zm0-4V6h11v2z");
}
</style><path class="bt4dvq_na"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:playlist-remove-outline"} {...others} />);
}

export default Component;
