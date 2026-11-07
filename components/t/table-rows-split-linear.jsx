import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jts3wgq4j.css';
import '../../css/t/tjrfi1_ui.css';
import '../../css/c/c_v3i9w2p.css';
import '../../css/y/yjol71blk.css';
import '../../css/p/pw6_k69dy.css';
import '../../css/t/ty0t6tblz.css';
import '../../css/w/wh408oret.css';
import '../../css/y/yjui92s4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jts3wgq4j"/><path class="tjrfi1_ui"/><path class="c_v3i9w2p"/><path class="yjol71blk"/><path class="pw6_k69dy"/><path class="ty0t6tblz"/><path class="wh408oret"/><path class="yjui92s4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-rows-split-linear"} {...others} />);
}

export default Component;
