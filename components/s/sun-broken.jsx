import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lq7a-_8su.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/q/qi4ad9bta.css';
import '../../css/i/i0kw3he6n.css';
import '../../css/p/pkibk1t_y.css';
import '../../css/x/xg9pqqbmx.css';
import '../../css/v/v6d0d7_pf.css';
import '../../css/n/n_csmurbe.css';
import '../../css/m/mgzczt2-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lq7a-_8su"/><path class="pq5xj2bli"/><path class="qi4ad9bta"/><path class="i0kw3he6n"/><path class="pkibk1t_y"/><path class="xg9pqqbmx"/><path class="v6d0d7_pf"/><path class="n_csmurbe"/><path class="mgzczt2-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-broken"} {...others} />);
}

export default Component;
