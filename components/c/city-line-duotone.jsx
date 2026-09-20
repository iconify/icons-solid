import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y6fmg0bii.css';
import '../../css/h/hf416_brp.css';
import '../../css/s/snx49vs3l.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/g/ghn47w9nx.css';
import '../../css/r/reedtrbma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y6fmg0bii"/><path class="hf416_brp"/><path class="snx49vs3l"/><path class="xpzbxokqs"/><path class="ghn47w9nx"/><path class="reedtrbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:city-line-duotone"} {...others} />);
}

export default Component;
