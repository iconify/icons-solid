import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m72b7wb7y.css';
import '../../css/e/e15xp0bpo.css';
import '../../css/g/g8_wfebcw.css';
import '../../css/v/vplo5e_jn.css';
import '../../css/b/b29_gwzlq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m72b7wb7y wm-k"/><path class="e15xp0bpo wm-a"/><path class="g8_wfebcw wm-shadow"/><path class="vplo5e_jn wm-k"/><path class="b29_gwzlq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:christmas-tree-engrave"} {...others} />);
}

export default Component;
