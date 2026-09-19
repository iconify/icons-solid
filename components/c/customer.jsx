import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vk_un1jmk.css';
import '../../css/x/xbxdhwbjf.css';
import '../../css/n/nohjf7qfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="vk_un1jmk"/><path class="xbxdhwbjf"/><path class="nohjf7qfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:customer"} {...others} />);
}

export default Component;
