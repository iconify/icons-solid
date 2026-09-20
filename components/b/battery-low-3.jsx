import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zbksxgb9w.css';
import '../../css/f/fwsy9ub_q.css';
import '../../css/l/lrv651b1a.css';
import '../../css/k/k60ilzbbp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zbksxgb9w"/><path class="fwsy9ub_q"/><path class="lrv651b1a"/><path class="k60ilzbbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:battery-low-3"} {...others} />);
}

export default Component;
