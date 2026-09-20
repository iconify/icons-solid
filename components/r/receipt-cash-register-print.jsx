import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iibenu4im.css';
import '../../css/p/pqg2vl8in.css';
import '../../css/k/kvd-lrbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iibenu4im"/><path class="pqg2vl8in"/><path class="kvd-lrbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:receipt-cash-register-print"} {...others} />);
}

export default Component;
