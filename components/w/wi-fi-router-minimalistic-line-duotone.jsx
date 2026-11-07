import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pupd7-b2k.css';
import '../../css/q/qxx89oblv.css';
import '../../css/o/os6rdo5dh.css';
import '../../css/y/yjcbf8b5d.css';
import '../../css/j/j9fdh6b1s.css';
import '../../css/u/uhyl7ub0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pupd7-b2k"/><path class="qxx89oblv"/><path class="os6rdo5dh"/><path class="yjcbf8b5d"/><path class="j9fdh6b1s"/><path class="uhyl7ub0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-minimalistic-line-duotone"} {...others} />);
}

export default Component;
