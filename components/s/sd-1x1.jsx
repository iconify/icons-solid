import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkkc99bna.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/q/qalcy3ggf.css';
import '../../css/u/um4eqgy9b.css';
import '../../css/m/m4l1qubmj.css';
import '../../css/t/tchct3v6g.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGKmUmGbAK"><path class="xkkc99bna"/></clipPath></defs><g clip-path="url(#SVGKmUmGbAK)" transform="scale(1.0321)" class="nv9qcacyl"><path class="qalcy3ggf"/><path class="um4eqgy9b"/><path class="m4l1qubmj"/><path class="tchct3v6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sd-1x1"} {...others} />);
}

export default Component;
