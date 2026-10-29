import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eognsbuin.css';
import '../../css/x/x-xm49bpd.css';
import '../../css/p/pqkdp8bps.css';
import '../../css/v/vanl12bnz.css';
import '../../css/h/h7btge1_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eognsbuin wm-k"/><path class="wm-a x-xm49bpd"/><path class="pqkdp8bps wm-shadow"/><path class="vanl12bnz wm-k"/><path class="h7btge1_e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:external-link-engrave"} {...others} />);
}

export default Component;
