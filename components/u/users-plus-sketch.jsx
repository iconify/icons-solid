import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/ps_iqbbjk.css';
import '../../css/n/ncja3g58k.css';
import '../../css/s/smuuuh87u.css';
import '../../css/y/yhnetzb3t.css';
import '../../css/k/kz28c1hto.css';
import '../../css/d/dlm7yr8dw.css';
import '../../css/w/wjyb9z-mn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ps_iqbbjk"/><path class="ncja3g58k wm-k"/><path class="smuuuh87u wm-a"/><path class="wm-s yhnetzb3t"/><path class="kz28c1hto wm-k"/><path class="dlm7yr8dw wm-a"/><path class="wjyb9z-mn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-plus-sketch"} {...others} />);
}

export default Component;
