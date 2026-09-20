import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dbq7igb1x.css';
import '../../css/s/swsqnccnl.css';
import '../../css/e/e_aw4b_ji.css';
import '../../css/b/bmmk3xbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dbq7igb1x"/><path class="swsqnccnl"/><path class="e_aw4b_ji"/><path class="bmmk3xbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:office-file-text-graph"} {...others} />);
}

export default Component;
