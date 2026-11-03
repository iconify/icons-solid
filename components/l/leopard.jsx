import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcroczb8a.css';
import '../../css/w/w_-y8rbic.css';
import '../../css/s/stszo-b8l.css';
import '../../css/q/qtvivvozr.css';
import '../../css/v/vhs681b-h.css';
import '../../css/n/ntyx-6b7k.css';
import '../../css/s/sngejux6w.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rcroczb8a"/><path class="w_-y8rbic"/><path class="stszo-b8l"/><g class="qtvivvozr"><path class="vhs681b-h"/><path class="ntyx-6b7k"/><path class="sngejux6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:leopard"} {...others} />);
}

export default Component;
