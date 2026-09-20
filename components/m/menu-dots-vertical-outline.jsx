import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pkxx7pbdp.css';
import '../../css/h/hp_pc2tmb.css';
import '../../css/t/tmnkdvnlf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pkxx7pbdp"/><path class="hp_pc2tmb"/><path class="tmnkdvnlf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-vertical-outline"} {...others} />);
}

export default Component;
