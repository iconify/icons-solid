import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l4fgqsblb.css';
import '../../css/t/te9yokbcn.css';
import '../../css/i/ifgkrcc4u.css';
import '../../css/k/kqfiq3o6s.css';
import '../../css/k/kv1izubuz.css';
import '../../css/n/nck0yz6fo.css';
import '../../css/e/e3mkn2bww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="l4fgqsblb"/><path class="te9yokbcn"/><path class="ifgkrcc4u"/><path class="kqfiq3o6s"/><path class="kv1izubuz"/><path class="nck0yz6fo"/><path class="e3mkn2bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:incognito-mode"} {...others} />);
}

export default Component;
