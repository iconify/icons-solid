import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f3o_89baw.css';
import '../../css/a/az08boy2n.css';
import '../../css/x/x8_o6_mhk.css';
import '../../css/t/ta3nl5tvi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="f3o_89baw"/><path class="az08boy2n"/><path class="x8_o6_mhk"/><path class="ta3nl5tvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wallet"} {...others} />);
}

export default Component;
