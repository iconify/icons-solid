import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpp-f2cxo.css';
import '../../css/s/stdqiukcl.css';
import '../../css/k/kzm10h_6z.css';
import '../../css/q/qilrv-bce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kpp-f2cxo"/><path clip-rule="evenodd" class="stdqiukcl"/><path class="kzm10h_6z"/><path class="qilrv-bce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-unread-lines-outline"} {...others} />);
}

export default Component;
