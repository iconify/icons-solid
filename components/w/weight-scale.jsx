import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vcszgnbgu.css';
import '../../css/n/n9n80kc-j.css';
import '../../css/o/oija6uhxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="vcszgnbgu"/><path class="n9n80kc-j"/><path class="oija6uhxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:weight-scale"} {...others} />);
}

export default Component;
