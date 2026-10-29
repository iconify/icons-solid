import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sl1_3cb7n.css';
import '../../css/w/w5xuimedp.css';
import '../../css/f/ft3chybja.css';
import '../../css/y/ywuh7ec-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sl1_3cb7n"/><path class="w5xuimedp wm-a"/><path class="ft3chybja wm-k"/><path class="wm-a ywuh7ec-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plug-sketch"} {...others} />);
}

export default Component;
