import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhjrbdc9j.css';
import '../../css/p/plrj5f2vw.css';
import '../../css/b/br0f4dk6n.css';
import '../../css/s/sjg-5acqt.css';
import '../../css/s/s-n89ebpo.css';
import '../../css/a/amvb_bc2h.css';
import '../../css/g/gxcrtzbln.css';
import '../../css/u/ue_xk_hen.css';
import '../../css/e/etso-bcdw.css';
import '../../css/s/skyk94b1e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nhjrbdc9j"/><path class="plrj5f2vw"/><path class="br0f4dk6n"/><path class="sjg-5acqt"/><path class="s-n89ebpo"/><path class="amvb_bc2h"/><path class="gxcrtzbln"/><path class="ue_xk_hen"/><path class="etso-bcdw"/><path class="skyk94b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:sunglasses"} {...others} />);
}

export default Component;
