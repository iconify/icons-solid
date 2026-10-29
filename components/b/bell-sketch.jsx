import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n7orkhbbo.css';
import '../../css/j/j96vk5o1p.css';
import '../../css/q/qkgcggwyv.css';
import '../../css/u/u1qgtlh6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n7orkhbbo"/><path class="j96vk5o1p wm-a"/><path class="qkgcggwyv wm-k"/><path class="u1qgtlh6g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-sketch"} {...others} />);
}

export default Component;
