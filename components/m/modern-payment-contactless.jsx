import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/llmotgtmg.css';
import '../../css/j/j_cmhzgyl.css';
import '../../css/d/ddso4ebsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="llmotgtmg"/><path class="j_cmhzgyl"/><path class="ddso4ebsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:modern-payment-contactless"} {...others} />);
}

export default Component;
