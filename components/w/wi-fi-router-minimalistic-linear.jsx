import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wryq7qf1p.css';
import '../../css/g/g9iewmb7q.css';
import '../../css/o/os6rdo5dh.css';
import '../../css/y/yjcbf8b5d.css';
import '../../css/t/ts8bjky0l.css';
import '../../css/l/ll0cv8o9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wryq7qf1p"/><path class="g9iewmb7q"/><path class="os6rdo5dh"/><path class="yjcbf8b5d"/><path class="ts8bjky0l"/><path class="ll0cv8o9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-minimalistic-linear"} {...others} />);
}

export default Component;
