import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pe_b4y5aw.css';
import '../../css/y/yqbctvbha.css';
import '../../css/d/d-v0vabmn.css';
import '../../css/o/oeom-qblu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="pe_b4y5aw"/><path class="yqbctvbha"/><path class="d-v0vabmn"/><path class="oeom-qblu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:half-star-2"} {...others} />);
}

export default Component;
