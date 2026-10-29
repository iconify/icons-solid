import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tqgkj3bdo.css';
import '../../css/f/fy80l6xbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tqgkj3bdo wm-k"/><path class="fy80l6xbv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unlink-sketch"} {...others} />);
}

export default Component;
