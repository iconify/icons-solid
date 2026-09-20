import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/leihgubvs.css';
import '../../css/h/htf0lnq4b.css';
import '../../css/u/uxykybyxi.css';
import '../../css/p/ptvu1u_4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="leihgubvs"/><path class="htf0lnq4b"/><path class="uxykybyxi"/><circle class="ptvu1u_4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-broken"} {...others} />);
}

export default Component;
