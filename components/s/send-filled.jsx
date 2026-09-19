import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/osuc4rb0v.css';
import '../../css/s/s_h1tmbej.css';
import '../../css/p/prd1nacfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="osuc4rb0v"/><path class="s_h1tmbej"/><path class="prd1nacfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:send-filled"} {...others} />);
}

export default Component;
