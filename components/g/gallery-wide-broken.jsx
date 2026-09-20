import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bi127sxje.css';
import '../../css/m/mqv8oacrv.css';
import '../../css/t/t5vsymb5k.css';
import '../../css/q/q3b3n4bkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bi127sxje"/><path class="mqv8oacrv"/><circle class="t5vsymb5k"/><path class="q3b3n4bkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-wide-broken"} {...others} />);
}

export default Component;
