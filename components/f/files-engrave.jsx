import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gjj-z7sbn.css';
import '../../css/z/zh-auabps.css';
import '../../css/j/j91e-mbhk.css';
import '../../css/y/yui4pigey.css';
import '../../css/v/vqyclfbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gjj-z7sbn wm-k"/><path class="wm-a zh-auabps"/><path class="j91e-mbhk wm-shadow"/><path class="wm-k yui4pigey"/><path class="vqyclfbmt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:files-engrave"} {...others} />);
}

export default Component;
