import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/usuo7wblk.css';
import '../../css/o/oj2nrac_h.css';
import '../../css/e/e-e-cxbmn.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/k/k3tex3kws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="usuo7wblk wm-k"/><path class="oj2nrac_h wm-a"/><path class="e-e-cxbmn wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="k3tex3kws wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baseball-engrave"} {...others} />);
}

export default Component;
