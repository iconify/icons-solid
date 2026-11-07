import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4b2-ebns.css';
import '../../css/i/i19y5idcx.css';
import '../../css/h/hc6jen6jy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w4b2-ebns"/><path class="i19y5idcx"/><path class="hc6jen6jy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:football-line-duotone"} {...others} />);
}

export default Component;
