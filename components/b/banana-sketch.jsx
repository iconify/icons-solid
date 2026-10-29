import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/omra4z-ek.css';
import '../../css/t/tej4gvqiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="omra4z-ek wm-k"/><path class="tej4gvqiy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:banana-sketch"} {...others} />);
}

export default Component;
