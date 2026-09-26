import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgv-sxbiz.css';
import '../../css/m/m6hvbi_wp.css';
import '../../css/q/q_3h0ub-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lgv-sxbiz"/><path class="m6hvbi_wp"/><path class="q_3h0ub-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-close-linear"} {...others} />);
}

export default Component;
