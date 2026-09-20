import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gcz48sbtl.css';
import '../../css/q/qjp0awbkx.css';
import '../../css/w/wey6o5haz.css';
import '../../css/l/lusb_0zdn.css';
import '../../css/k/k2047ac3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><g class="gcz48sbtl"><path class="qjp0awbkx"/><path class="wey6o5haz"/><path class="lusb_0zdn"/></g><path class="k2047ac3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:controller-wireless"} {...others} />);
}

export default Component;
