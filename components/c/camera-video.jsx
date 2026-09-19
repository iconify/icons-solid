import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oyei4sb8x.css';
import '../../css/p/pb2cbbcpz.css';
import '../../css/z/z1jh5abfk.css';
import '../../css/i/i_vfs1szn.css';
import '../../css/f/fpn5tub8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oyei4sb8x"/><path class="pb2cbbcpz"/><path class="z1jh5abfk"/><circle class="i_vfs1szn"/><circle class="fpn5tub8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-video"} {...others} />);
}

export default Component;
