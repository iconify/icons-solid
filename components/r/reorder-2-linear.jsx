import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iy-deskju.css';
import '../../css/w/weljqzbjy.css';
import '../../css/u/uuvldhb1y.css';
import '../../css/y/yjjibyi4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iy-deskju"/><path class="weljqzbjy"/><path class="uuvldhb1y"/><path class="yjjibyi4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reorder-2-linear"} {...others} />);
}

export default Component;
