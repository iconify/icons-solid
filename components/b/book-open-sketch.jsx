import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ntluoabif.css';
import '../../css/l/l4rtpqumh.css';
import '../../css/u/u5184whll.css';
import '../../css/y/y6sbpzbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ntluoabif"/><path class="l4rtpqumh wm-k"/><path class="u5184whll wm-k"/><path class="wm-a y6sbpzbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-sketch"} {...others} />);
}

export default Component;
