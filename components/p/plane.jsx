import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxes17kih.css';
import '../../css/j/jhk_opbfc.css';
import '../../css/d/dql_ghb7d.css';
import '../../css/k/kxf2pb91z.css';
import '../../css/x/x__184bjm.css';
import '../../css/p/p449hf0zl.css';
import '../../css/t/te937f02k.css';
import '../../css/q/qjez9pb0i.css';
import '../../css/w/w879wm9qr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rxes17kih wm-shadow"/><path class="jhk_opbfc wm-shadow"/><path class="dql_ghb7d"/><path class="kxf2pb91z"/><path class="x__184bjm"/><path class="p449hf0zl"/><path class="te937f02k wm-shine"/><path class="qjez9pb0i wm-shine"/><path class="w879wm9qr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:plane"} {...others} />);
}

export default Component;
