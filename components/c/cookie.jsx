import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mctpq_yof.css';
import '../../css/x/xgwqvcpyd.css';
import '../../css/d/d-3kv1bjr.css';
import '../../css/p/prwrr3loe.css';
import '../../css/a/a8rtq7b8k.css';
import '../../css/z/zclsmrn0k.css';
import '../../css/y/yftobebic.css';
import '../../css/i/i-7gcci3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mctpq_yof"/><path class="xgwqvcpyd"/><path class="d-3kv1bjr wm-shine"/><path class="prwrr3loe wm-k"/><path class="a8rtq7b8k wm-a"/><path class="zclsmrn0k"/><path class="yftobebic"/><path class="i-7gcci3m wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cookie"} {...others} />);
}

export default Component;
