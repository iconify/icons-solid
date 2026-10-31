import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yw5jbxv0x.css';
import '../../css/s/s0gi_fbkr.css';
import '../../css/z/zw25_fouw.css';
import '../../css/n/nu58gbc_b.css';
import '../../css/i/ik5228bhp.css';
import '../../css/s/sf98dabxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yw5jbxv0x"/><path class="s0gi_fbkr"/><path class="zw25_fouw"/><path class="nu58gbc_b"/><path class="ik5228bhp"/><path class="sf98dabxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:panel-right"} {...others} />);
}

export default Component;
