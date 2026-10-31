import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i309x2b5e.css';
import '../../css/l/l39lfuh0p.css';
import '../../css/g/gc9ew1bqh.css';
import '../../css/l/l2fpngjgy.css';
import '../../css/c/ccg9pxipy.css';
import '../../css/g/gd-2yzb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i309x2b5e"/><path class="l39lfuh0p"/><path class="gc9ew1bqh wm-shine"/><path class="l2fpngjgy"/><path class="ccg9pxipy"/><path class="gd-2yzb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:folder"} {...others} />);
}

export default Component;
