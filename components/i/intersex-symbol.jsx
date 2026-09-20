import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zvesnzx_q.css';
import '../../css/w/wqa_wub5s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zvesnzx_q"/><path class="wqa_wub5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:intersex-symbol"} {...others} />);
}

export default Component;
