import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q_xpl5b9t.css';
import '../../css/t/t6qtu5t7v.css';
import '../../css/y/ywnhkcb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q_xpl5b9t"/><path class="t6qtu5t7v"/><path class="ywnhkcb3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hamburger-menu-line-duotone"} {...others} />);
}

export default Component;
