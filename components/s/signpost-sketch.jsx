import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i_1xs8ezl.css';
import '../../css/j/jcugpbcrt.css';
import '../../css/e/erfo6-egg.css';
import '../../css/p/psaadlbfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i_1xs8ezl"/><path class="jcugpbcrt wm-k"/><path class="erfo6-egg wm-k"/><path class="psaadlbfa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signpost-sketch"} {...others} />);
}

export default Component;
