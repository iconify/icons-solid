import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cz7cm1p3d.css';
import '../../css/w/w48o_g6he.css';
import '../../css/m/m3_k9abbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cz7cm1p3d"/><path class="w48o_g6he"/><path class="m3_k9abbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-2-linear"} {...others} />);
}

export default Component;
