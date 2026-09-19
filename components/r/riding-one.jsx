import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/v/v_484qh6q.css';
import '../../css/l/l9r336bha.css';
import '../../css/d/dpkxoqb1h.css';
import '../../css/a/ass-a4axu.css';
import '../../css/y/ybb_z95sb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="v_484qh6q"/><path class="l9r336bha"/><path class="dpkxoqb1h"/><path class="ass-a4axu"/><path class="ybb_z95sb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:riding-one"} {...others} />);
}

export default Component;
