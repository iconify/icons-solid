import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d8ghwdbfk.css';
import '../../css/c/crsjgi0ys.css';
import '../../css/o/obwxlfoek.css';
import '../../css/p/p2hre-57p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d8ghwdbfk"/><path class="crsjgi0ys wm-a"/><path class="obwxlfoek wm-k"/><path class="p2hre-57p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-diff-sketch"} {...others} />);
}

export default Component;
