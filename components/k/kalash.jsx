import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da4sxppok.css';
import '../../css/i/irhzdxz5f.css';
import '../../css/a/afxuopprg.css';
import '../../css/v/vq26vyb6s.css';
import '../../css/b/bhmsoub7h.css';
import '../../css/q/qgv-ocbxn.css';
import '../../css/m/m5c3_nbul.css';
import '../../css/z/z8azti4_u.css';
import '../../css/i/i0-mx2fpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="da4sxppok wm-k"/><path class="irhzdxz5f wm-a"/><path class="afxuopprg wm-deco"/><path class="vq26vyb6s wm-k"/><path class="bhmsoub7h wm-k"/><path class="qgv-ocbxn wm-a"/><path class="m5c3_nbul wm-shadow"/><path class="wm-shine z8azti4_u"/><path class="i0-mx2fpa wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:kalash"} {...others} />);
}

export default Component;
