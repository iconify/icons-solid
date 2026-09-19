import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pvkpvmyui.css';
import '../../css/v/vvjm9e27u.css';
import '../../css/q/q56rgfbjg.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pvkpvmyui"/><path class="vvjm9e27u"/><path class="q56rgfbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:target-bold"} {...others} />);
}

export default Component;
