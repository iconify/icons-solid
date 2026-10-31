import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fr4bo3gwt.css';
import '../../css/j/jezylcclr.css';
import '../../css/d/dpt8cybap.css';
import '../../css/s/s763usbgm.css';
import '../../css/d/dskxx4tfo.css';
import '../../css/q/qr_wpfblc.css';
import '../../css/n/n8uelo3ae.css';
import '../../css/u/u8fuf8djr.css';
import '../../css/k/kye1zvpdk.css';
import '../../css/a/a-kjnabhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fr4bo3gwt wm-k"/><path class="jezylcclr wm-deco"/><path class="dpt8cybap wm-k"/><path class="s763usbgm wm-shadow"/><path class="dskxx4tfo wm-shine"/><path class="qr_wpfblc wm-shine"/><path class="n8uelo3ae wm-a"/><path class="u8fuf8djr wm-a"/><path class="kye1zvpdk wm-a"/><path class="a-kjnabhv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:moon"} {...others} />);
}

export default Component;
