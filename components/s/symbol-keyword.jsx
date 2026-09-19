import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np53o28bd.css';
import '../../css/c/cvi0tubrb.css';
import '../../css/y/ywsaehxql.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="np53o28bd"/><path clip-rule="evenodd" class="cvi0tubrb"/><path class="ywsaehxql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:symbol-keyword"} {...others} />);
}

export default Component;
