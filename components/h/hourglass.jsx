import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/am3w19y2w.css';
import '../../css/i/ixbce_brs.css';
import '../../css/z/zzra4cwbj.css';
import '../../css/f/fdonljfmr.css';
import '../../css/a/aux2szb6h.css';
import '../../css/e/e_wi-vbfj.css';
import '../../css/h/h7ex2d1oh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="am3w19y2w"/><path class="ixbce_brs"/><path class="zzra4cwbj"/><path class="fdonljfmr wm-shine"/><path class="aux2szb6h"/><path class="e_wi-vbfj"/><path class="h7ex2d1oh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hourglass"} {...others} />);
}

export default Component;
