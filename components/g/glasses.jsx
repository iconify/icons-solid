import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/na619iptd.css';
import '../../css/j/j-cnw4j5k.css';
import '../../css/i/ipnix8xme.css';
import '../../css/g/gne64qddn.css';
import '../../css/m/mmoklrktj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="na619iptd"/><circle class="j-cnw4j5k"/><path class="ipnix8xme"/><path class="gne64qddn"/><path class="mmoklrktj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:glasses"} {...others} />);
}

export default Component;
