import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cizqhfhwa.css';
import '../../css/v/vnrdsbm0h.css';
import '../../css/m/m87phnwxj.css';
import '../../css/x/xzg4_jarp.css';
import '../../css/o/o-vxkub_w.css';
import '../../css/l/lb87m1-sh.css';
import '../../css/z/ze2v_tw4f.css';
import '../../css/a/a2nqcpfzt.css';
import '../../css/k/khtz6k99h.css';
import '../../css/r/rbjp8x5fq.css';
import '../../css/y/ya6_5ub-k.css';
import '../../css/i/ickblcbyb.css';
import '../../css/p/pf1fbbbuc.css';
import '../../css/a/anjzeuyhw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cizqhfhwa wm-shadow"/><path class="vnrdsbm0h wm-k"/><path class="m87phnwxj wm-k"/><path class="wm-k xzg4_jarp"/><path class="o-vxkub_w wm-k"/><path class="lb87m1-sh wm-k"/><path class="wm-shine ze2v_tw4f"/><path class="a2nqcpfzt wm-k"/><path class="khtz6k99h wm-a"/><path class="rbjp8x5fq wm-a"/><path class="wm-a ya6_5ub-k"/><path class="ickblcbyb wm-a"/><path class="pf1fbbbuc wm-a"/><path class="anjzeuyhw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:address-book"} {...others} />);
}

export default Component;
