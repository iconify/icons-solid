import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kruqtab-m.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/r/ros5bvrws.css';
import '../../css/s/sthj-0bog.css';
import '../../css/c/csr3o-baz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kruqtab-m"/><path class="x-1lf64uh"/><path class="ros5bvrws"/><path class="sthj-0bog"/><path class="csr3o-baz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-2-broken"} {...others} />);
}

export default Component;
