import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fsmb31ovw.css';
import '../../css/j/ju-ctmv8z.css';
import '../../css/j/j7db_6ita.css';
import '../../css/e/e2w_1rb3l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fsmb31ovw"/><path class="ju-ctmv8z"/><path class="j7db_6ita"/><path class="e2w_1rb3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fahrenheit"} {...others} />);
}

export default Component;
