import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfkufcbrf.css';
import '../../css/n/n7db0f67r.css';
import '../../css/v/vr4-bqacv.css';
import '../../css/h/h7c6wsb2u.css';
import '../../css/b/b8wb441cx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hfkufcbrf"/><path class="n7db0f67r"/><path class="vr4-bqacv"/><path class="h7c6wsb2u"/><path class="b8wb441cx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-medal"} {...others} />);
}

export default Component;
