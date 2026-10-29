import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/ztptv0bde.css';
import '../../css/a/aczwgrt9b.css';
import '../../css/b/b0tfb6skh.css';
import '../../css/t/tc5tthbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ztptv0bde"/><path class="aczwgrt9b wm-a"/><path class="b0tfb6skh wm-k"/><path class="tc5tthbjf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-x-sketch"} {...others} />);
}

export default Component;
