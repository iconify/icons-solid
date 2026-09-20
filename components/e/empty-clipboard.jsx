import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lut1clltg.css';
import '../../css/c/ci35usb_p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="lut1clltg"/><path class="ci35usb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:empty-clipboard"} {...others} />);
}

export default Component;
