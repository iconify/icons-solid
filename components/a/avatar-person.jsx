import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezeflxjvt.css';
import '../../css/r/rjj6xxbkc.css';
import '../../css/g/g8d33tbhk.css';
import '../../css/j/jgv92tbgz.css';
import '../../css/i/ikntjdbjh.css';
import '../../css/w/wr-nsgveu.css';
import '../../css/j/jjlpbzh7l.css';
import '../../css/c/crmvtcbue.css';
import '../../css/i/i63e0jb8z.css';
import '../../css/c/c2gnmbcff.css';
import '../../css/z/z3e-iz6ma.css';
import '../../css/o/ohizzl_an.css';
import '../../css/n/noxuj2_ze.css';
import '../../css/n/nt-0c-bjt.css';
import '../../css/d/dr0kqfb6v.css';
import '../../css/x/xb1iryzmj.css';
import '../../css/r/rv24z3fxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ezeflxjvt wm-shadow"/><path class="rjj6xxbkc wm-k"/><path class="g8d33tbhk wm-k"/><path class="jgv92tbgz wm-k"/><path class="ikntjdbjh wm-k"/><path class="wm-k wr-nsgveu"/><path class="jjlpbzh7l wm-shine"/><path class="crmvtcbue wm-a"/><path class="i63e0jb8z wm-a"/><path class="c2gnmbcff wm-a"/><path class="wm-a z3e-iz6ma"/><path class="ohizzl_an wm-a"/><path class="noxuj2_ze wm-a"/><path class="nt-0c-bjt wm-a"/><path class="dr0kqfb6v wm-a"/><path class="wm-a xb1iryzmj"/><path class="rv24z3fxy wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:avatar-person"} {...others} />);
}

export default Component;
