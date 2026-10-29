import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rmq984bjk.css';
import '../../css/y/y051bxb0l.css';
import '../../css/f/fjzjs9b3x.css';
import '../../css/p/psa_3hb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rmq984bjk"/><path class="wm-k y051bxb0l"/><path class="fjzjs9b3x wm-k"/><path class="psa_3hb6w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:workflow-sketch"} {...others} />);
}

export default Component;
