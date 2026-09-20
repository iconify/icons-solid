import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qbnfq_kql.css';
import '../../css/w/w3vn4_bvn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="qbnfq_kql"/><path class="w3vn4_bvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:search-visual"} {...others} />);
}

export default Component;
