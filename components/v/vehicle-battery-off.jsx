import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbxe9t4ta.css';
import '../../css/i/irbjmcycn.css';
import '../../css/r/rc_n7n1qz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="xbxe9t4ta"/><rect class="irbjmcycn"/><path class="rc_n7n1qz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:vehicle-battery-off"} {...others} />);
}

export default Component;
