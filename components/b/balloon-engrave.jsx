import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nmy1dpycx.css';
import '../../css/o/o8u3p9jxa.css';
import '../../css/p/pmi8aabzp.css';
import '../../css/d/d5kv-1gyk.css';
import '../../css/k/kl56jmaqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nmy1dpycx wm-k"/><path class="o8u3p9jxa wm-a"/><path class="pmi8aabzp wm-shadow"/><path class="d5kv-1gyk wm-k"/><path class="kl56jmaqc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:balloon-engrave"} {...others} />);
}

export default Component;
