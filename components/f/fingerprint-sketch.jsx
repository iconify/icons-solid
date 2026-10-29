import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j3dcsdbvr.css';
import '../../css/o/okzts2beh.css';
import '../../css/t/tkbhou2iz.css';
import '../../css/d/dn06k0bio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j3dcsdbvr wm-k"/><path class="okzts2beh wm-a"/><path class="tkbhou2iz wm-k"/><path class="dn06k0bio wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fingerprint-sketch"} {...others} />);
}

export default Component;
