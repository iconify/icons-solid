import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qigw63bzv.css';
import '../../css/r/rtlgzfaqo.css';
import '../../css/r/rgrhdhb3y.css';
import '../../css/j/j_40p_bup.css';
import '../../css/e/ex0yxzbwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="qigw63bzv wm-shadow"/><path fill="url(#SVGU00zieBw)" class="rtlgzfaqo wm-k"/><path class="rgrhdhb3y wm-k"/><path class="j_40p_bup wm-k"/><path class="ex0yxzbwx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:kanban"} {...others} />);
}

export default Component;
