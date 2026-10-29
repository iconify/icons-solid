import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ui_oqub5z.css';
import '../../css/y/y_jfvcwtp.css';
import '../../css/l/l484bmbsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ui_oqub5z"/><path class="wm-shadow y_jfvcwtp"/><path class="l484bmbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-engrave"} {...others} />);
}

export default Component;
