import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k9e-5ihoi.css';
import '../../css/d/drgun2b_o.css';
import '../../css/y/ynfoavvdq.css';
import '../../css/n/ndj9-_i_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k9e-5ihoi"/><path class="drgun2b_o"/><path class="ynfoavvdq"/><path class="ndj9-_i_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-5-linear"} {...others} />);
}

export default Component;
