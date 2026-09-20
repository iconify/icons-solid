import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sthj-0bog.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/c/csr3o-baz.css';
import '../../css/r/ros5bvrws.css';
import '../../css/l/lg_7281ce.css';
import '../../css/s/s1hfqbcfi.css';
import '../../css/c/cos_lwb7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sthj-0bog"/><path class="x-1lf64uh"/><path class="csr3o-baz"/><path class="ros5bvrws"/><path class="lg_7281ce"/><path class="s1hfqbcfi"/><path class="cos_lwb7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:object-scan-broken"} {...others} />);
}

export default Component;
