import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xowq_f8wg.css';
import '../../css/k/kljns8ben.css';
import '../../css/p/pxwye0-1e.css';
import '../../css/x/xxygkxb6l.css';
import '../../css/q/qtklu4blg.css';
import '../../css/e/e2igpoyas.css';
import '../../css/d/d4fdsdkxo.css';
import '../../css/f/f942rp0th.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xowq_f8wg"/><path clip-rule="evenodd" class="kljns8ben"/><path class="pxwye0-1e"/><path class="xxygkxb6l"/><path class="qtklu4blg"/><path class="e2igpoyas"/><path class="d4fdsdkxo"/><path class="f942rp0th"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-small-bold"} {...others} />);
}

export default Component;
