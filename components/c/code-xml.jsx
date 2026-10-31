import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iv1ilyxim.css';
import '../../css/s/sxcyyhiuo.css';
import '../../css/c/cmy3gzbuc.css';
import '../../css/l/lm67usb9e.css';
import '../../css/e/eq_wixhje.css';
import '../../css/b/bi0bpef2w.css';
import '../../css/y/yedfnacyc.css';
import '../../css/q/qimnhgbgm.css';
import '../../css/t/tuo6x131q.css';
import '../../css/u/uvcynacgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iv1ilyxim wm-shadow"/><path class="sxcyyhiuo wm-a"/><path class="cmy3gzbuc wm-a"/><path class="lm67usb9e wm-a"/><path class="eq_wixhje wm-shine"/><path class="bi0bpef2w wm-k"/><path class="wm-k yedfnacyc"/><path class="qimnhgbgm wm-k"/><path class="tuo6x131q wm-k"/><path class="uvcynacgh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:code-xml"} {...others} />);
}

export default Component;
