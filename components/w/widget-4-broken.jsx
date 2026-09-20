import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p_8xklbbj.css';
import '../../css/g/g8fm3s2qb.css';
import '../../css/y/ynfoavvdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p_8xklbbj"/><path class="g8fm3s2qb"/><path class="ynfoavvdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-4-broken"} {...others} />);
}

export default Component;
