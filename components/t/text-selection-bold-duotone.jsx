import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2ttpth5v.css';
import '../../css/g/g8_u4xbyz.css';
import '../../css/v/vbxsouwau.css';
import '../../css/x/xl8fv4blq.css';
import '../../css/x/xcipw4bwf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uf5zlrpgw.css';
import '../../css/r/r1gavlbdj.css';
import '../../css/y/y3y3lz79e.css';
import '../../css/s/symx9vbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2ttpth5v"/><path class="g8_u4xbyz"/><path class="vbxsouwau"/><path class="xl8fv4blq"/><path class="xcipw4bwf"/><g class="xtpeb-edw"><path class="uf5zlrpgw"/><path class="r1gavlbdj"/><path class="y3y3lz79e"/><path class="symx9vbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-selection-bold-duotone"} {...others} />);
}

export default Component;
