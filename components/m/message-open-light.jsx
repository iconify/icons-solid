import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kun71ryne.css';
import '../../css/o/off1vrrsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="kun71ryne"/><path class="off1vrrsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:message-open-light"} {...others} />);
}

export default Component;
