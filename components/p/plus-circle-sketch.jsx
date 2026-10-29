import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qgi8hqb5s.css';
import '../../css/f/frg6hh-gx.css';
import '../../css/d/dv0t7jb2h.css';
import '../../css/k/korl07bdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qgi8hqb5s"/><path class="frg6hh-gx wm-a"/><path class="dv0t7jb2h wm-k"/><path class="korl07bdb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plus-circle-sketch"} {...others} />);
}

export default Component;
