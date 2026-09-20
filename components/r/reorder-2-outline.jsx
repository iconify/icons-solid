import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ai_o9o6nn.css';
import '../../css/t/t6tblzbrr.css';
import '../../css/r/rzf1-f5ka.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ai_o9o6nn"/><path class="t6tblzbrr"/><path class="rzf1-f5ka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-2-outline"} {...others} />);
}

export default Component;
