import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i_ekgcbck.css';
import '../../css/w/w1e5zbljd.css';
import '../../css/x/x6ja8kbsx.css';
import '../../css/a/aiv36acva.css';
import '../../css/k/k0sj8ln3i.css';
import '../../css/z/zpbpljmxb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="i_ekgcbck"/><path class="w1e5zbljd"/><path class="x6ja8kbsx"/><path class="aiv36acva"/><path class="k0sj8ln3i"/><path class="zpbpljmxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:information-desk"} {...others} />);
}

export default Component;
