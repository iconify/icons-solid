import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olys9sbiz.css';
import '../../css/j/j15hsxhrh.css';
import '../../css/o/orra4-big.css';
import '../../css/k/k0o-bn15s.css';
import '../../css/u/uygzrsbnf.css';
import '../../css/x/xygzvab_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="olys9sbiz"/><path class="j15hsxhrh"/><path class="orra4-big"/><path class="k0o-bn15s"/><path class="uygzrsbnf"/><path class="xygzvab_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shipment-touch"} {...others} />);
}

export default Component;
