import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bhrl3db-r.css';
import '../../css/i/immdxpb6m.css';
import '../../css/q/q-ca_6bsx.css';
import '../../css/w/w4fklccqs.css';
import '../../css/x/x2wfbzbcz.css';
import '../../css/f/fkvw3pbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bhrl3db-r wm-k"/><path class="immdxpb6m wm-a"/><path class="q-ca_6bsx wm-shadow"/><path class="w4fklccqs wm-k"/><path class="wm-a x2wfbzbcz"/><path class="fkvw3pbgy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fingerprint-engrave"} {...others} />);
}

export default Component;
