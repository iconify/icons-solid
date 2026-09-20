import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rma5_ql1e.css';
import '../../css/m/migl5jbsu.css';
import '../../css/b/beaeuqbls.css';
import '../../css/i/ip-kvve8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rma5_ql1e"/><path class="migl5jbsu"/><path class="beaeuqbls"/><path class="ip-kvve8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sidebar-line-duotone"} {...others} />);
}

export default Component;
