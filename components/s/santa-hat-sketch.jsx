import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gjvqajwca.css';
import '../../css/y/y5j9z9byl.css';
import '../../css/z/zuj_ibfbz.css';
import '../../css/k/kck4_gd1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gjvqajwca"/><path class="wm-k y5j9z9byl"/><path class="wm-k zuj_ibfbz"/><path class="kck4_gd1h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:santa-hat-sketch"} {...others} />);
}

export default Component;
