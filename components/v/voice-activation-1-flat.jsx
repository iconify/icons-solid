import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/azxo7r7_y.css';
import '../../css/t/tpemhdl9p.css';
import '../../css/k/kbfndbc2p.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="azxo7r7_y"/><path class="tpemhdl9p"/><path class="kbfndbc2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:voice-activation-1-flat"} {...others} />);
}

export default Component;
