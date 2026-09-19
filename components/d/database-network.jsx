import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j7x6uwbzg.css';
import '../../css/f/f7k8k4bku.css';
import '../../css/l/l8n2f1bih.css';
import '../../css/a/af4alv-9w.css';
import '../../css/v/v9r__tesz.css';
import '../../css/b/b94c3vyyx.css';
import '../../css/a/amf30e2rx.css';
import '../../css/s/sz6sr2qfa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="j7x6uwbzg"/><path class="f7k8k4bku"/><path class="l8n2f1bih"/><path class="af4alv-9w"/><path class="v9r__tesz"/><path class="b94c3vyyx"/><path class="amf30e2rx"/><path class="sz6sr2qfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:database-network"} {...others} />);
}

export default Component;
