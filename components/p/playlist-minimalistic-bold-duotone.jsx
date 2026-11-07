import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcwj51wla.css';
import '../../css/d/dxldknbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rcwj51wla"/><path class="dxldknbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
