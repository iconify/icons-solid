import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eo72fgzbg.css';
import '../../css/w/wasvw5btm.css';
import '../../css/w/w3adtxkdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="eo72fgzbg wm-k"/><path class="wasvw5btm wm-k"/><path class="w3adtxkdl wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mosque-gloss"} {...others} />);
}

export default Component;
