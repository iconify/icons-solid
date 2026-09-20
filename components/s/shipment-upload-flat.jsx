import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opuzw1uwx.css';
import '../../css/q/qno0y1lhe.css';
import '../../css/h/hl9wkibvl.css';
import '../../css/o/o_k9s9bkt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="opuzw1uwx"/><path class="qno0y1lhe"/><path clip-rule="evenodd" class="hl9wkibvl"/><path class="o_k9s9bkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shipment-upload-flat"} {...others} />);
}

export default Component;
