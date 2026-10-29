import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8wbignpn.css';
import '../../css/b/b7zllsb1m.css';
import '../../css/j/jt04y9bpm.css';
import '../../css/c/c0mva6bss.css';
import '../../css/o/o-a46ul8b.css';
import '../../css/n/nyicinbdv.css';
import '../../css/o/o172q-bix.css';
import '../../css/j/jp3m9abfx.css';
import '../../css/e/e5dyq_b0d.css';
import '../../css/m/m42n1mb3s.css';
import '../../css/u/u_myjbbym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w8wbignpn wm-shadow"/><path class="b7zllsb1m wm-shadow"/><path class="jt04y9bpm"/><path class="c0mva6bss"/><path class="o-a46ul8b"/><path class="nyicinbdv"/><path class="o172q-bix wm-shine"/><path class="jp3m9abfx wm-shine"/><path class="e5dyq_b0d"/><path class="m42n1mb3s"/><path class="u_myjbbym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:mic-vocal"} {...others} />);
}

export default Component;
