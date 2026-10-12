import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5bfowbny.css';
import '../../css/v/v8ox6mbiy.css';
import '../../css/z/z0lle8c1c.css';
import '../../css/d/dn0lqrbkt.css';
import '../../css/z/zypkqtbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u5bfowbny"/><path class="v8ox6mbiy"/><rect class="z0lle8c1c"/><path class="dn0lqrbkt"/><path class="zypkqtbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-backward-thirty"} {...others} />);
}

export default Component;
