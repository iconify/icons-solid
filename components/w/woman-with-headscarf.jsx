import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l88mxnbpi.css';
import '../../css/d/dq1ooxw0n.css';
import '../../css/z/ztwkx2hlv.css';
import '../../css/t/t4yxw7jvs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="l88mxnbpi"/><path class="dq1ooxw0n"/><path class="ztwkx2hlv"/><path class="t4yxw7jvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-with-headscarf"} {...others} />);
}

export default Component;
