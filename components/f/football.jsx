import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkmp7qbee.css';
import '../../css/h/hyz9dv3od.css';
import '../../css/g/g_wtklbsn.css';
import '../../css/d/d3f6uwbyi.css';
import '../../css/s/spb1by4ae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nkmp7qbee"/><path class="hyz9dv3od"/><path class="g_wtklbsn"/><path class="d3f6uwbyi"/><path class="spb1by4ae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:football"} {...others} />);
}

export default Component;
