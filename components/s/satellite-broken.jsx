import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p82yzhump.css';
import '../../css/e/efyt3acxm.css';
import '../../css/l/l1vnaybdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p82yzhump"/><path class="efyt3acxm"/><path class="l1vnaybdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:satellite-broken"} {...others} />);
}

export default Component;
