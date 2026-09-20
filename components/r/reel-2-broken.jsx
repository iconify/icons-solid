import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pn2r-9bzq.css';
import '../../css/i/i46k68_po.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/p/p8jx-kb8x.css';
import '../../css/j/ja8v-rhtc.css';
import '../../css/n/ne6lh4btq.css';
import '../../css/z/zbfkny6yh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pn2r-9bzq"/><path class="i46k68_po"/><path class="ko6o-6b9b"/><path class="p8jx-kb8x"/><path class="ja8v-rhtc"/><path class="ne6lh4btq"/><path class="zbfkny6yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-2-broken"} {...others} />);
}

export default Component;
