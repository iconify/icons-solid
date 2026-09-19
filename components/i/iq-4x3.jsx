import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v18c9fbau.css';
import '../../css/y/yt-bzx_hx.css';
import '../../css/r/r38kscbse.css';
import '../../css/s/sig_pk1ng.css';
import '../../css/x/x3u30gbsb.css';
import '../../css/z/zgf4lb5wb.css';
import '../../css/e/egd19hbfj.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="v18c9fbau"/><path class="yt-bzx_hx"/><path class="r38kscbse"/><g transform="translate(-179.3 -92.8)scale(1.75182)" class="sig_pk1ng"><path class="x3u30gbsb"/><circle class="zgf4lb5wb"/><path class="egd19hbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:iq-4x3"} {...others} />);
}

export default Component;
