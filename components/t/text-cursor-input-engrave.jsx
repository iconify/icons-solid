import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yq5-eix0m.css';
import '../../css/r/r01u23bzh.css';
import '../../css/n/n7_wv_bsx.css';
import '../../css/a/a7not2p8q.css';
import '../../css/e/e-x1c4yrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yq5-eix0m"/><path class="r01u23bzh wm-a"/><path class="n7_wv_bsx wm-shadow"/><path class="a7not2p8q wm-k"/><path class="e-x1c4yrw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-cursor-input-engrave"} {...others} />);
}

export default Component;
