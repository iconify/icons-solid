import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a9sqkvb_m.css';
import '../../css/a/a4pwcccxv.css';
import '../../css/x/x4522uhjs.css';
import '../../css/n/nk-54lbig.css';
import '../../css/w/wrkbx9bny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a9sqkvb_m wm-k"/><path class="a4pwcccxv wm-shadow"/><path class="wm-k x4522uhjs"/><path class="nk-54lbig wm-k"/><path class="wm-a wrkbx9bny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dna-engrave"} {...others} />);
}

export default Component;
