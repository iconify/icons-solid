import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sq1y8ubsb.css';
import '../../css/w/we-n9xbbi.css';
import '../../css/q/qc5p_m7be.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sq1y8ubsb"/><path class="we-n9xbbi"/><path class="qc5p_m7be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:file-code-html"} {...others} />);
}

export default Component;
