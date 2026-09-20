import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evsr84xeg.css';
import '../../css/t/t_w5_mkql.css';
import '../../css/v/vgynvrhex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="evsr84xeg"/><path class="t_w5_mkql"/><path class="vgynvrhex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-3-line-duotone"} {...others} />);
}

export default Component;
