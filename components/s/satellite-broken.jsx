import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dqvkli3td.css';
import '../../css/t/tev0_7rwp.css';
import '../../css/w/wawugdb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dqvkli3td"/><path class="tev0_7rwp"/><path class="wawugdb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:satellite-broken"} {...others} />);
}

export default Component;
