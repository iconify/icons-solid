import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj5s0jbxb.css';
import '../../css/d/dewmg5bph.css';
import '../../css/o/oesxcy1jn.css';
import '../../css/r/rstpwhbcc.css';
import '../../css/s/sql5vlbyz.css';
import '../../css/b/bc_szpb0j.css';
import '../../css/h/hf3f57lbl.css';
import '../../css/c/culuprhlb.css';
import '../../css/m/m9qv_9bco.css';
import '../../css/c/cc3zh6bvg.css';
import '../../css/p/p8qep1dxm.css';
import '../../css/p/pwgui2e6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj5s0jbxb wm-shadow"/><path class="dewmg5bph wm-k"/><path class="oesxcy1jn wm-k"/><path class="rstpwhbcc wm-k"/><path class="sql5vlbyz wm-k"/><path class="bc_szpb0j wm-shine"/><path class="hf3f57lbl wm-k"/><path class="culuprhlb wm-a"/><path class="m9qv_9bco wm-a"/><path class="cc3zh6bvg wm-a"/><path class="p8qep1dxm wm-a"/><path class="pwgui2e6w wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:sidebar"} {...others} />);
}

export default Component;
