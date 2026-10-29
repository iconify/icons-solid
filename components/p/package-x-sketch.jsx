import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s1v13vbfl.css';
import '../../css/r/rr6xnxotj.css';
import '../../css/i/i8641g8no.css';
import '../../css/h/hpifajrwq.css';
import '../../css/s/srr6u-d7l.css';
import '../../css/d/drzgstbaa.css';
import '../../css/a/aj486vrwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s1v13vbfl"/><path class="rr6xnxotj wm-k"/><path class="i8641g8no wm-a"/><path class="hpifajrwq wm-s"/><path class="srr6u-d7l wm-k"/><path class="drzgstbaa wm-a"/><path class="aj486vrwt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-x-sketch"} {...others} />);
}

export default Component;
