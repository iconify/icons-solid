import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u0s48-y0n.css';
import '../../css/v/vw3528bnl.css';
import '../../css/a/arihl3bdb.css';
import '../../css/l/lii0jv5qd.css';
import '../../css/g/ghqgw0btr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u0s48-y0n"/><path class="vw3528bnl"/><path class="arihl3bdb"/><path class="lii0jv5qd"/><path class="ghqgw0btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-2-broken"} {...others} />);
}

export default Component;
