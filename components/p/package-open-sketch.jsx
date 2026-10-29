import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l3w9o904c.css';
import '../../css/n/nw025lbnr.css';
import '../../css/d/dgmk__b2x.css';
import '../../css/d/d1v43fshw.css';
import '../../css/s/sqb3ibhos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l3w9o904c"/><path class="nw025lbnr wm-k"/><path class="dgmk__b2x wm-a"/><path class="d1v43fshw wm-k"/><path class="sqb3ibhos wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-open-sketch"} {...others} />);
}

export default Component;
