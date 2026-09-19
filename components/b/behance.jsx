import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q8w2p-sat.css';
import '../../css/r/rr3x7ccdt.css';
import '../../css/j/jhvhmudid.css';
import '../../css/e/eie2tfbmr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="q8w2p-sat"/><path clip-rule="evenodd" class="rr3x7ccdt"/><path class="jhvhmudid"/><path class="eie2tfbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:behance"} {...others} />);
}

export default Component;
