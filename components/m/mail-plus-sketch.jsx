import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/km0ygpb3n.css';
import '../../css/g/g_8368xec.css';
import '../../css/w/wnpmo9f2g.css';
import '../../css/t/th_pupb0n.css';
import '../../css/d/d9pr4ebmt.css';
import '../../css/e/ez0qwxbtf.css';
import '../../css/m/m4hmxbbxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="km0ygpb3n"/><path class="g_8368xec wm-k"/><path class="wm-a wnpmo9f2g"/><path class="th_pupb0n wm-s"/><path class="d9pr4ebmt wm-k"/><path class="ez0qwxbtf wm-a"/><path class="m4hmxbbxc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-plus-sketch"} {...others} />);
}

export default Component;
