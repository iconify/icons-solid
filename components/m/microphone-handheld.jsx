import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bbt1n2-ga.css';
import '../../css/d/dtgyfrb2h.css';
import '../../css/q/qe_94vbov.css';
import '../../css/r/rpts7tzjm.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bbt1n2-ga"/><path class="dtgyfrb2h"/><path class="qe_94vbov"/><path class="rpts7tzjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:microphone-handheld"} {...others} />);
}

export default Component;
