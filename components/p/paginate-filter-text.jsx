import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr49ncf-u.css';
import '../../css/a/a_14debek.css';
import '../../css/j/jcpnr7wmn.css';
import '../../css/g/gf-op2b2p.css';
import '../../css/p/pw4_ixbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mr49ncf-u"/><path class="a_14debek"/><path class="jcpnr7wmn"/><path class="gf-op2b2p"/><path class="pw4_ixbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:paginate-filter-text"} {...others} />);
}

export default Component;
