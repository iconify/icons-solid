import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/i/iy1n2hbtc.css';
import '../../css/t/t_h4aackq.css';
import '../../css/j/jb-6-hqnl.css';
import '../../css/p/pi5sz3bgz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="iy1n2hbtc"/><path clip-rule="evenodd" class="t_h4aackq"/><path clip-rule="evenodd" class="jb-6-hqnl"/><path clip-rule="evenodd" class="pi5sz3bgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:rainbow-duo"} {...others} />);
}

export default Component;
