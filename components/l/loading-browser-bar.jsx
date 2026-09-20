import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uv6xp-ayh.css';
import '../../css/v/vxqky-bzm.css';
import '../../css/w/wsgdav6vn.css';
import '../../css/p/p7_0k8bil.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uv6xp-ayh"/><path class="vxqky-bzm"/><path class="wsgdav6vn"/><path class="p7_0k8bil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:loading-browser-bar"} {...others} />);
}

export default Component;
