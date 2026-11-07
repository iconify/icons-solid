import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zzp2vnbza.css';
import '../../css/f/fvf6w1p5c.css';
import '../../css/n/n_45qf4se.css';
import '../../css/x/x-amkeb7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zzp2vnbza"/><path class="fvf6w1p5c"/><path class="n_45qf4se"/><path class="x-amkeb7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-arrow-line-duotone"} {...others} />);
}

export default Component;
