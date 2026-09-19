import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vp82i6bmg.css';
import '../../css/w/wbev7pbna.css';
import '../../css/a/amfmd727l.css';
import '../../css/f/fkv52firo.css';
import '../../css/e/eia4hzbco.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="vp82i6bmg"/><path class="wbev7pbna"/><circle class="amfmd727l"/><path class="fkv52firo"/><path class="eia4hzbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:robot-two"} {...others} />);
}

export default Component;
