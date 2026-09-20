import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yomxfr7rx.css';
import '../../css/a/aq815yc3w.css';
import '../../css/a/asie7vbxk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="yomxfr7rx"/><path class="aq815yc3w"/><path class="asie7vbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:usb-port"} {...others} />);
}

export default Component;
