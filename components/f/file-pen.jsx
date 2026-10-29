import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b8ku5xbmn.css';
import '../../css/m/mlviqx7px.css';
import '../../css/x/x0o72c0hh.css';
import '../../css/z/z9unghaau.css';
import '../../css/j/jjvmr109j.css';
import '../../css/d/dtkp11-2n.css';
import '../../css/m/mw561-2it.css';
import '../../css/a/aoqjeob2s.css';
import '../../css/v/vuoj88y-n.css';
import '../../css/l/lvdqtzbdf.css';
import '../../css/v/vmgu87bkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b8ku5xbmn wm-shadow"/><path class="mlviqx7px"/><path class="x0o72c0hh"/><path class="z9unghaau"/><path class="jjvmr109j wm-shine"/><path class="dtkp11-2n wm-s"/><path class="mw561-2it wm-s"/><path class="aoqjeob2s wm-s"/><path class="vuoj88y-n wm-s"/><path class="lvdqtzbdf wm-s"/><path class="vmgu87bkx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file-pen"} {...others} />);
}

export default Component;
