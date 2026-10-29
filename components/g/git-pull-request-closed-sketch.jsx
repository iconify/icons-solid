import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ib0-f2njr.css';
import '../../css/b/bh193db1h.css';
import '../../css/q/qayjij97x.css';
import '../../css/o/ocuzjvylb.css';
import '../../css/j/ja1wzrbcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ib0-f2njr"/><path class="bh193db1h wm-k"/><path class="qayjij97x wm-s"/><path class="ocuzjvylb wm-k"/><path class="ja1wzrbcy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-closed-sketch"} {...others} />);
}

export default Component;
