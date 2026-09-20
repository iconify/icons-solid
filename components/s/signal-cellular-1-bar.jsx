import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.omf6sab1k {
  fill: currentColor;
  d: path("M3 21L21 3v18zm6.289-1H20V5.427L9.289 16.139z");
}
</style><path class="omf6sab1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-1-bar"} {...others} />);
}

export default Component;
