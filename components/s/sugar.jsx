import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jvn-yrvsr.css';
import '../../css/p/pfcofkbgs.css';
import '../../css/n/ng_xb_b3f.css';
import '../../css/p/pice2pb4o.css';
import '../../css/o/o2x36accw.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jvn-yrvsr"/><path class="pfcofkbgs"/><path class="ng_xb_b3f"/><path class="pice2pb4o"/><path class="o2x36accw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sugar"} {...others} />);
}

export default Component;
