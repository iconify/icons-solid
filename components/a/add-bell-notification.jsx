import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iz9cq8bph.css';
import '../../css/n/n0481d_hy.css';
import '../../css/r/rsi2v6_mx.css';
import '../../css/h/htenewwyl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="iz9cq8bph"/><path class="n0481d_hy"/><path class="rsi2v6_mx"/><path class="htenewwyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:add-bell-notification"} {...others} />);
}

export default Component;
