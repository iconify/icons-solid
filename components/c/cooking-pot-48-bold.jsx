import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6__lzt8k.css';
import '../../css/t/t50w30baf.css';
import '../../css/s/sfzihbf0j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w6__lzt8k"/><path class="t50w30baf"/><path class="sfzihbf0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cooking-pot-48-bold"} {...others} />);
}

export default Component;
