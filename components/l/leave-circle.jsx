import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yqyyyybpj.css';
import '../../css/q/qdb3q2bfe.css';
import '../../css/u/u0t-u-bdx.css';
import '../../css/u/uyps3wbnh.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yqyyyybpj"/><path class="qdb3q2bfe"/><path class="u0t-u-bdx"/><path class="uyps3wbnh"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:leave-circle"} {...others} />);
}

export default Component;
