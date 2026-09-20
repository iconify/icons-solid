import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/z/zc6fw0k_a.css';
import '../../css/j/j3-nj7urp.css';
import '../../css/p/p8jx-kb8x.css';
import '../../css/j/ja8v-rhtc.css';
import '../../css/n/ne6lh4btq.css';
import '../../css/z/zbfkny6yh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="zc6fw0k_a"/><path class="j3-nj7urp"/><path class="p8jx-kb8x"/><path class="ja8v-rhtc"/><path class="ne6lh4btq"/><path class="zbfkny6yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-2-line-duotone"} {...others} />);
}

export default Component;
