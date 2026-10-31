import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/njb96lsbu.css';
import '../../css/p/pb8o7t_sy.css';
import '../../css/m/myhs4_ibh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="njb96lsbu wm-k"/><path class="pb8o7t_sy wm-a"/><path class="myhs4_ibh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spider-gloss"} {...others} />);
}

export default Component;
