import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gsxicobdl.css';
import '../../css/t/tzpkcedjf.css';
import '../../css/o/ov2wiebyk.css';
import '../../css/s/s1ykx_bri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gsxicobdl"/><path class="tzpkcedjf wm-a"/><path class="ov2wiebyk wm-k"/><path class="s1ykx_bri wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:check-circle-sketch"} {...others} />);
}

export default Component;
