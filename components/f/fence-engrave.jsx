import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ya54ocmxk.css';
import '../../css/i/i54m6-fqy.css';
import '../../css/s/s53jcxmyz.css';
import '../../css/m/mexbxv5go.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k ya54ocmxk"/><path class="i54m6-fqy wm-shadow"/><path class="s53jcxmyz wm-k"/><path class="mexbxv5go wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fence-engrave"} {...others} />);
}

export default Component;
