import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nilpa4b3t.css';
import '../../css/a/aoccgcbcn.css';
import '../../css/k/k2au_xbxv.css';
import '../../css/g/gbaq1_boo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nilpa4b3t wm-shadow"/><path class="aoccgcbcn wm-shadow"/><path class="k2au_xbxv"/><path class="gbaq1_boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:notebook"} {...others} />);
}

export default Component;
