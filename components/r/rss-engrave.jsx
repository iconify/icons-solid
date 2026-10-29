import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r666aifuf.css';
import '../../css/n/nfv97lb1r.css';
import '../../css/o/oonylrreg.css';
import '../../css/w/wi2sckbls.css';
import '../../css/w/wgi9_72zv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r666aifuf wm-k"/><path class="nfv97lb1r wm-a"/><path class="oonylrreg wm-shadow"/><path class="wi2sckbls wm-k"/><path class="wgi9_72zv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rss-engrave"} {...others} />);
}

export default Component;
