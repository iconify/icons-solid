import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jdkpgfdem.css';
import '../../css/h/h2b3rolij.css';
import '../../css/o/o-t2vm4xb.css';
import '../../css/p/pxnvek8pu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jdkpgfdem"/><path class="h2b3rolij wm-a"/><path class="o-t2vm4xb wm-k"/><path class="pxnvek8pu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-sketch"} {...others} />);
}

export default Component;
