import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjk1_ku9t.css';
import '../../css/m/m2ray9b6i.css';
import '../../css/q/qahu-cxms.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jjk1_ku9t"/><path class="m2ray9b6i"/><path class="qahu-cxms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:magnet-print"} {...others} />);
}

export default Component;
