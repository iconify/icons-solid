import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lt4t6s5au.css';
import '../../css/h/hk4-sab2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lt4t6s5au"/><path class="hk4-sab2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-dashboard-sketch"} {...others} />);
}

export default Component;
