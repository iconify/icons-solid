import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/keqt0zbld.css';
import '../../css/j/j41kocbsj.css';
import '../../css/k/kz8j27a0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="keqt0zbld"/><path class="j41kocbsj"/><path class="kz8j27a0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-minimalistic-broken"} {...others} />);
}

export default Component;
