import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d99a4ab7w.css';
import '../../css/x/x8bhsfbpi.css';
import '../../css/k/kr9qfqbem.css';
import '../../css/e/e_7-9xf_y.css';
import '../../css/k/kuyifphou.css';
import '../../css/w/w83i_ub1m.css';
import '../../css/d/d1k4vcd7l.css';
import '../../css/a/atpikebfo.css';
import '../../css/z/z22xbkb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d99a4ab7w"/><path class="x8bhsfbpi"/><path class="kr9qfqbem"/><path class="e_7-9xf_y wm-shine"/><path class="kuyifphou wm-k"/><path class="w83i_ub1m wm-a"/><path class="d1k4vcd7l"/><path class="atpikebfo"/><path class="wm-shine z22xbkb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-woman-hijab"} {...others} />);
}

export default Component;
