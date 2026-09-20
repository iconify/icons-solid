import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/gvlqz4aiy.css';
import '../../css/g/gauw2p1-o.css';
import '../../css/p/pl42_4bqo.css';
import '../../css/s/sn01zlbqh.css';
import '../../css/m/mc4n-6bac.css';
import '../../css/z/zm6gsmbpq.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="gvlqz4aiy"/><path class="gauw2p1-o"/><path class="pl42_4bqo"/></g><path class="sn01zlbqh"/><path class="mc4n-6bac"/><path class="zm6gsmbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-left"} {...others} />);
}

export default Component;
