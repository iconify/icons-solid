import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxonao8es.css';
import '../../css/g/gozlzkbdk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vxonao8es"/><path class="gozlzkbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:button-pause-2"} {...others} />);
}

export default Component;
