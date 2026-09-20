import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pw09ep_1j.css';
import '../../css/q/qdev1pbxg.css';
import '../../css/z/z7k_8bb_d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="pw09ep_1j"/><path class="qdev1pbxg"/><path class="z7k_8bb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:steps-1"} {...others} />);
}

export default Component;
