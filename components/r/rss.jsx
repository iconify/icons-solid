import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bgwj3fkvr.css';
import '../../css/l/lu_os5b8f.css';
import '../../css/w/wgi9_72zv.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bgwj3fkvr"/><path class="lu_os5b8f wm-k"/><path class="wgi9_72zv wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rss"} {...others} />);
}

export default Component;
