import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5bfowbny.css';
import '../../css/v/v8ox6mbiy.css';
import '../../css/j/j-3j_n51l.css';
import '../../css/z/z0lle8c1c.css';
import '../../css/i/iavelubor.css';
import '../../css/z/zypkqtbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u5bfowbny"/><path class="v8ox6mbiy"/><path class="j-3j_n51l"/><rect class="z0lle8c1c"/><path class="iavelubor"/><path class="zypkqtbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-forward-thirty-rtl"} {...others} />);
}

export default Component;
