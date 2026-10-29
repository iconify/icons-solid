import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w9ajr2buq.css';
import '../../css/g/gzd_hhgyz.css';
import '../../css/k/kmm60_boe.css';
import '../../css/a/au_lwlbtb.css';
import '../../css/c/cujblzn0h.css';
import '../../css/b/bujohac1h.css';
import '../../css/a/a6rgdo_nj.css';
import '../../css/h/hx0ecabev.css';
import '../../css/q/qlmufcchk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w9ajr2buq wm-shadow"/><path class="gzd_hhgyz wm-k"/><path class="kmm60_boe wm-a"/><path class="au_lwlbtb wm-k"/><path class="cujblzn0h wm-a"/><path class="bujohac1h wm-k"/><path class="a6rgdo_nj wm-a"/><path class="hx0ecabev wm-k"/><path class="qlmufcchk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:component-engrave"} {...others} />);
}

export default Component;
