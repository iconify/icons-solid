import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p7-4i_btc.css';
import '../../css/q/q9sd8hbki.css';
import '../../css/s/s5oju0f4i.css';
import '../../css/q/qac792bpu.css';
import '../../css/h/hww-gf21m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="p7-4i_btc"/><path class="q9sd8hbki"/><path class="s5oju0f4i"/><path class="qac792bpu"/><path class="hww-gf21m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:alien"} {...others} />);
}

export default Component;
