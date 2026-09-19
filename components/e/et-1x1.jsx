import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rml5m-dlt.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/s/s0kd2qxrj.css';
import '../../css/x/x3ps2pbuq.css';
import '../../css/t/tu25amb9n.css';
import '../../css/k/k8o4s-rcj.css';
import '../../css/r/rlh32fbkn.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVG5e2thwaP"><path class="rml5m-dlt"/></clipPath></defs><g clip-path="url(#SVG5e2thwaP)" transform="translate(-240 -6.6)scale(1.046)" class="nv9qcacyl"><path class="s0kd2qxrj"/><path class="x3ps2pbuq"/><path class="tu25amb9n"/><circle transform="translate(204.7 77)scale(.515)" class="k8o4s-rcj"/><path class="rlh32fbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:et-1x1"} {...others} />);
}

export default Component;
