import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilzg0rbou.css';
import '../../css/q/qrj7tbbdr.css';
import '../../css/l/lbtxys0iu.css';
import '../../css/x/xnxf21bni.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ilzg0rbou"/><path class="qrj7tbbdr"/><path class="lbtxys0iu"/><path class="xnxf21bni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:phone-notification"} {...others} />);
}

export default Component;
