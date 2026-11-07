import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wcfd5bcjz {
  fill: currentColor;
  d: path("M17.553 7.894L13 5.618v2.764l3.447 1.724a1 1 0 1 1-.894 1.788L13 10.618V17a4.001 4.001 0 1 1-2-3.465V4a1 1 0 0 1 1.447-.894l6 3a1 1 0 1 1-.894 1.788");
}
</style><path class="wcfd5bcjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:music-note-double-fill-sharp"} {...others} />);
}

export default Component;
