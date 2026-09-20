import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/ymx63dbjn.css';
import '../../css/n/nknv9dbkq.css';
import '../../css/i/iqhlhrb0p.css';
import '../../css/u/u-xzz3p8n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ymx63dbjn"/><path class="nknv9dbkq"/><path class="iqhlhrb0p"/><path class="u-xzz3p8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shield-1"} {...others} />);
}

export default Component;
