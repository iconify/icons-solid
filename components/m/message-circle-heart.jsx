import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vm3l94b7e.css';
import '../../css/g/g2t_rfbcn.css';
import '../../css/y/ylibrfpnq.css';
import '../../css/m/mcgr3vbmg.css';
import '../../css/z/z6s-x5nyb.css';
import '../../css/a/a1x296bat.css';
import '../../css/q/qg7blb3ly.css';
import '../../css/g/gmvwtwbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="vm3l94b7e"/><path class="g2t_rfbcn"/><path class="ylibrfpnq"/><path class="mcgr3vbmg wm-shine"/><path class="wm-k z6s-x5nyb"/><path class="a1x296bat wm-a"/><path class="qg7blb3ly"/><path class="gmvwtwbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:message-circle-heart"} {...others} />);
}

export default Component;
