import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/p/po_cu2qvd.css';
import '../../css/x/xz5zppbrv.css';
import '../../css/y/yt8upc14k.css';
import '../../css/w/wgxtv13op.css';
import '../../css/m/mcfjab2bo.css';
import '../../css/d/duk-virjr.css';
import '../../css/z/zbe93rb9t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="po_cu2qvd"/><path class="xz5zppbrv"/><path class="yt8upc14k"/><path class="wgxtv13op"/><path class="mcfjab2bo"/><path class="duk-virjr"/><path class="zbe93rb9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:podium-duo"} {...others} />);
}

export default Component;
