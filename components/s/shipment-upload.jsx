import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/ewcbejbwr.css';
import '../../css/p/p52332dst.css';
import '../../css/x/xeftzuwhc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ewcbejbwr"/><path class="p52332dst"/><path class="xeftzuwhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:shipment-upload"} {...others} />);
}

export default Component;
