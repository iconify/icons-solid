import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cwfqxbbmp.css';
import '../../css/y/ydi4l6wia.css';
import '../../css/y/y79632q_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cwfqxbbmp"/><path class="wm-k ydi4l6wia"/><path class="wm-a y79632q_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-draft-sketch"} {...others} />);
}

export default Component;
