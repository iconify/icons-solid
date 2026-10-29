import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k3guns27r.css';
import '../../css/y/y_9r-oqdn.css';
import '../../css/u/up7_xtq7l.css';
import '../../css/p/p0ewt213x.css';
import '../../css/j/jgkke34ed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k3guns27r wm-k"/><path class="wm-a y_9r-oqdn"/><path class="up7_xtq7l wm-shadow"/><path class="p0ewt213x wm-k"/><path class="jgkke34ed wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-open-engrave"} {...others} />);
}

export default Component;
