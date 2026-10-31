import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sqfiisb1o.css';
import '../../css/l/lzq8mubvg.css';
import '../../css/g/gc9ew1bqh.css';
import '../../css/l/l2fpngjgy.css';
import '../../css/w/wxx3ysb1g.css';
import '../../css/w/wnveq1bjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sqfiisb1o"/><path class="lzq8mubvg"/><path class="gc9ew1bqh wm-shine"/><path class="l2fpngjgy wm-k"/><path class="wm-a wxx3ysb1g"/><path class="wm-deco wnveq1bjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:folder-lock"} {...others} />);
}

export default Component;
