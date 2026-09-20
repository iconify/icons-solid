import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ea2d71bzx.css';
import '../../css/l/l7ln3fn_r.css';
import '../../css/a/a3t744bof.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ea2d71bzx"/><path class="l7ln3fn_r"/><path class="a3t744bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:history-3-bold"} {...others} />);
}

export default Component;
