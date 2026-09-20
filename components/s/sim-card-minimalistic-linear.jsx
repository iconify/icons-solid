import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/orqtdgb5k.css';
import '../../css/i/iz4genbti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="orqtdgb5k"/><path class="iz4genbti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sim-card-minimalistic-linear"} {...others} />);
}

export default Component;
