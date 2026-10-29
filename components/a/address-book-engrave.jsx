import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k0slrxj9a.css';
import '../../css/m/mxc1ddbwf.css';
import '../../css/c/coff_0a1c.css';
import '../../css/p/p568vbblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k0slrxj9a wm-k"/><path class="mxc1ddbwf wm-shadow"/><path class="coff_0a1c wm-k"/><path class="p568vbblp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:address-book-engrave"} {...others} />);
}

export default Component;
