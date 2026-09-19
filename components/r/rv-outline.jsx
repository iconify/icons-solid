import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xz2z7f3fq.css';
import '../../css/t/t_f0x_b-c.css';
import '../../css/n/np5y80p8g.css';
import '../../css/p/psw603pny.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xz2z7f3fq"/><path class="t_f0x_b-c"/><path class="np5y80p8g"/><path class="psw603pny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rv-outline"} {...others} />);
}

export default Component;
