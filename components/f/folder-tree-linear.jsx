import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyoovxudk.css';
import '../../css/l/lnct-eb9z.css';
import '../../css/k/k-oml3pvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lyoovxudk"/><path class="lnct-eb9z"/><path class="k-oml3pvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-tree-linear"} {...others} />);
}

export default Component;
