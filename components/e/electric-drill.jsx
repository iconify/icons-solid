import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uiwsv8akx.css';
import '../../css/w/wqyxkuyuv.css';
import '../../css/h/h6uz_o3bp.css';
import '../../css/i/izth8wb4y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="uiwsv8akx"/><path class="wqyxkuyuv"/><path class="h6uz_o3bp"/><path class="izth8wb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:electric-drill"} {...others} />);
}

export default Component;
