import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djxvyvu-p.css';
import '../../css/k/k9s6mcbcw.css';
import '../../css/m/mwvzbxb8w.css';
import '../../css/g/ggcku44qv.css';
import '../../css/n/nrnc3t1za.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="djxvyvu-p"/><path class="k9s6mcbcw"/><circle class="mwvzbxb8w"/><circle class="ggcku44qv"/><path class="nrnc3t1za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:evacuate"} {...others} />);
}

export default Component;
