import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xom426d7s.css';
import '../../css/y/yab8ndbub.css';
import '../../css/l/lijmdjbse.css';
import '../../css/z/zf2559byo.css';
import '../../css/n/n9-r4xsau.css';
import '../../css/w/wu1ohpb1x.css';
import '../../css/w/wld-_fbrt.css';
import '../../css/p/pg9-o1bzi.css';
import '../../css/g/gb2wy8tul.css';
import '../../css/n/ni0f_3bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xom426d7s"/><path class="wm-shadow yab8ndbub"/><path class="lijmdjbse"/><path class="zf2559byo"/><path class="n9-r4xsau"/><path class="wu1ohpb1x"/><path class="wld-_fbrt"/><path class="pg9-o1bzi wm-shine"/><path class="gb2wy8tul wm-shine"/><path class="ni0f_3bfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:list-tree"} {...others} />);
}

export default Component;
