import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqpl8jb6z.css';
import '../../css/v/vamw6spgm.css';
import '../../css/j/j2l4c4iul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oqpl8jb6z"/><path clip-rule="evenodd" class="vamw6spgm"/><path class="j2l4c4iul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-bold-duotone"} {...others} />);
}

export default Component;
