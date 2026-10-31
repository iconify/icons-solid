import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nddmdzz-m.css';
import '../../css/a/akdv00bxe.css';
import '../../css/r/rilhjbure.css';
import '../../css/l/lpvdy8b7o.css';
import '../../css/v/vu3k_039v.css';
import '../../css/z/zp1t379qi.css';
import '../../css/c/c948uygsx.css';
import '../../css/k/kh92kh2to.css';
import '../../css/o/o2g6embot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nddmdzz-m"/><path class="akdv00bxe"/><path class="rilhjbure wm-shine"/><path class="lpvdy8b7o wm-k"/><path class="vu3k_039v wm-a"/><path class="wm-s zp1t379qi"/><path class="c948uygsx"/><path class="kh92kh2to"/><path class="o2g6embot wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hot-cocoa"} {...others} />);
}

export default Component;
