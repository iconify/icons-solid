import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/q/q_db8_jqy.css';
import '../../css/t/t2gnh4b_r.css';
import '../../css/y/yeak49cce.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="q_db8_jqy"/><path class="t2gnh4b_r"/><path class="yeak49cce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ye-4x3"} {...others} />);
}

export default Component;
