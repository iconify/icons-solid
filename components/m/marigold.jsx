import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tivf0cr7v.css';
import '../../css/x/xsz3fbb9e.css';
import '../../css/s/swycombsd.css';
import '../../css/i/ij72ljbex.css';
import '../../css/e/eez02jb3b.css';
import '../../css/b/b4pt11lab.css';
import '../../css/j/j-_tgcbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tivf0cr7v"/><path class="xsz3fbb9e"/><path class="swycombsd wm-shine"/><path class="ij72ljbex wm-k"/><path class="eez02jb3b wm-a"/><path class="b4pt11lab"/><path class="j-_tgcbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:marigold"} {...others} />);
}

export default Component;
