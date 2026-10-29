import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bqx1ccb4e.css';
import '../../css/k/kcp0sf6ge.css';
import '../../css/d/d56nsib3c.css';
import '../../css/d/dhuewpeee.css';
import '../../css/b/byf_cebpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bqx1ccb4e wm-k"/><path class="kcp0sf6ge wm-a"/><path class="d56nsib3c wm-shadow"/><path class="dhuewpeee wm-k"/><path class="byf_cebpl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:skip-forward-engrave"} {...others} />);
}

export default Component;
