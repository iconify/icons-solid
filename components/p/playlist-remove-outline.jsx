import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hut2hdf3b {
  fill: currentColor;
  d: path("m14.496 21.308l-.708-.708l2.6-2.6l-2.6-2.6l.708-.708l2.6 2.6l2.6-2.6l.708.708l-2.6 2.6l2.6 2.6l-.708.708l-2.6-2.6zM3.596 15.5v-1h7v1zm0-4v-1h11v1zm0-4v-1h11v1z");
}
</style><path class="hut2hdf3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:playlist-remove-outline"} {...others} />);
}

export default Component;
