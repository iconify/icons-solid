import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kwbel-b_g.css';
import '../../css/d/du9wco7gb.css';
import '../../css/y/y3it9jeju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kwbel-b_g"/><path class="du9wco7gb"/><path class="y3it9jeju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-lock"} {...others} />);
}

export default Component;
