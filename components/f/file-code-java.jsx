import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e7chxnbls.css';
import '../../css/h/hnjb5cc-x.css';
import '../../css/q/qc5p_m7be.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e7chxnbls"/><path class="hnjb5cc-x"/><path class="qc5p_m7be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:file-code-java"} {...others} />);
}

export default Component;
