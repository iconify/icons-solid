import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bt2cyrfre.css';
import '../../css/o/o0k4l6g_c.css';
import '../../css/p/pb6npfbbs.css';
import '../../css/j/jy2te41lo.css';
import '../../css/x/xn2to8bjm.css';
import '../../css/h/hrnbeybpb.css';
import '../../css/w/w7fpxvben.css';
import '../../css/u/u148iqb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bt2cyrfre"/><path class="o0k4l6g_c"/><path class="pb6npfbbs wm-shine"/><path class="jy2te41lo wm-k"/><path class="wm-a xn2to8bjm"/><path class="hrnbeybpb"/><path class="w7fpxvben"/><path class="u148iqb4j wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:piggy-bank"} {...others} />);
}

export default Component;
