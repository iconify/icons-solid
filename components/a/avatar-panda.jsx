import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kl86fhb2f.css';
import '../../css/d/dy_peubmm.css';
import '../../css/b/bcvwyqbsd.css';
import '../../css/l/l60i11bja.css';
import '../../css/p/p__iqqbyw.css';
import '../../css/z/zpph_bbqb.css';
import '../../css/q/qcw__8qnf.css';
import '../../css/z/zxfnz98ya.css';
import '../../css/u/u4j42hbnv.css';
import '../../css/t/tpl4ygbgm.css';
import '../../css/m/m0dbs10ck.css';
import '../../css/j/jg3a7tbyd.css';
import '../../css/b/b8twyubsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kl86fhb2f wm-shadow"/><path class="dy_peubmm wm-k"/><path class="bcvwyqbsd wm-k"/><path class="l60i11bja wm-k"/><path class="p__iqqbyw wm-k"/><path class="wm-k zpph_bbqb"/><path class="qcw__8qnf wm-shine"/><path class="wm-a zxfnz98ya"/><path class="u4j42hbnv wm-a"/><path class="tpl4ygbgm wm-a"/><path class="m0dbs10ck wm-a"/><path class="jg3a7tbyd wm-a"/><path class="b8twyubsv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:avatar-panda"} {...others} />);
}

export default Component;
