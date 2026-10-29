import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qvtmxxitk.css';
import '../../css/b/beg68_mea.css';
import '../../css/x/x-l9lm25o.css';
import '../../css/i/ieczbzx_k.css';
import '../../css/p/pk_0yebwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qvtmxxitk"/><path class="beg68_mea wm-k"/><path class="wm-a x-l9lm25o"/><path class="ieczbzx_k wm-k"/><path class="pk_0yebwm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pen-line-sketch"} {...others} />);
}

export default Component;
