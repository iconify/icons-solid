import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bto7pc17j.css';
import '../../css/k/kp2-bibah.css';
import '../../css/q/qfoyfkmvy.css';
import '../../css/p/pqh64-bnk.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="bto7pc17j"/><path class="kp2-bibah"/><path class="qfoyfkmvy"/><path class="pqh64-bnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:binoculars-1-outline"} {...others} />);
}

export default Component;
