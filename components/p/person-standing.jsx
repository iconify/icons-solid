import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3hoanb2q.css';
import '../../css/k/kyikpab_o.css';
import '../../css/s/s9_1isb5n.css';
import '../../css/d/du3woyblk.css';
import '../../css/m/my26o77re.css';
import '../../css/z/z3rj3nlml.css';
import '../../css/x/x-zbzvbib.css';
import '../../css/o/oycsdtbye.css';
import '../../css/t/tr_n7orow.css';
import '../../css/p/p_o1qe90w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k z3hoanb2q"/><path class="kyikpab_o wm-k"/><path class="s9_1isb5n wm-k"/><path class="du3woyblk wm-a"/><path class="my26o77re wm-a"/><path class="wm-a z3rj3nlml"/><path class="wm-k x-zbzvbib"/><path class="oycsdtbye wm-k"/><path class="tr_n7orow wm-k"/><path class="p_o1qe90w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:person-standing"} {...others} />);
}

export default Component;
