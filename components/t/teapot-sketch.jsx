import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u8qk27jdf.css';
import '../../css/k/kpdyd_f9c.css';
import '../../css/c/c3b9ubbke.css';
import '../../css/i/ih7hcfuhc.css';
import '../../css/o/ol7hp6b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u8qk27jdf"/><path class="kpdyd_f9c wm-k"/><path class="c3b9ubbke wm-k"/><path class="ih7hcfuhc wm-a"/><path class="ol7hp6b8d wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:teapot-sketch"} {...others} />);
}

export default Component;
