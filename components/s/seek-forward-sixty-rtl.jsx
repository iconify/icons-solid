import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5bfowbny.css';
import '../../css/v/v8ox6mbiy.css';
import '../../css/l/lnq_bu_nx.css';
import '../../css/j/j-3j_n51l.css';
import '../../css/e/ekgj9nbpl.css';
import '../../css/o/oqg5em2jn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u5bfowbny"/><path class="v8ox6mbiy"/><rect class="lnq_bu_nx"/><path class="j-3j_n51l"/><circle transform="rotate(90 8.91 14.24)" class="ekgj9nbpl"/><path class="oqg5em2jn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-forward-sixty-rtl"} {...others} />);
}

export default Component;
