import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxuoc7bwn.css';
import '../../css/a/azhjxcb8w.css';
import '../../css/t/tyadkeunl.css';
import '../../css/g/gechv2isr.css';
import '../../css/i/i772r5bva.css';
import '../../css/y/yse1pv_bn.css';
import '../../css/i/i3dzmtb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kxuoc7bwn wm-k"/><path class="azhjxcb8w wm-k"/><path class="tyadkeunl wm-k"/><path class="gechv2isr wm-shadow"/><path class="i772r5bva wm-shine"/><path class="wm-shine yse1pv_bn"/><path class="i3dzmtb9d wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:receipt-text"} {...others} />);
}

export default Component;
