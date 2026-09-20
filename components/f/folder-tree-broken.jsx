import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dezabzb6f.css';
import '../../css/u/unlx30bij.css';
import '../../css/k/k-oml3pvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dezabzb6f"/><path class="unlx30bij"/><path class="k-oml3pvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-tree-broken"} {...others} />);
}

export default Component;
