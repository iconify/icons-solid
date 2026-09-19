import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pr64cbbvx.css';
import '../../css/s/sq8f8ob_o.css';
import '../../css/z/zol00gbcg.css';
import '../../css/v/vstuyi3mi.css';
import '../../css/b/bi98q3btc.css';
import '../../css/t/t86st8bpj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="pr64cbbvx"/><path class="sq8f8ob_o"/><path class="zol00gbcg"/><path class="vstuyi3mi"/><path class="bi98q3btc"/><path class="t86st8bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:circular-connection"} {...others} />);
}

export default Component;
