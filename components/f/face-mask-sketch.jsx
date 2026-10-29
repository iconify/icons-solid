import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n5crp9bgp.css';
import '../../css/l/lgultwbwl.css';
import '../../css/b/b2ekdbbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n5crp9bgp wm-a"/><path class="lgultwbwl wm-k"/><path class="b2ekdbbqw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:face-mask-sketch"} {...others} />);
}

export default Component;
