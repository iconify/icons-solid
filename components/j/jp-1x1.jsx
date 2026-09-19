import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s62b32b6l.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/o/o0fyexb-p.css';
import '../../css/i/ird86_e6x.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGCUQTvdjP"><path class="s62b32b6l"/></clipPath></defs><g clip-path="url(#SVGCUQTvdjP)" transform="translate(-128)scale(.72249)" class="nv9qcacyl"><path class="o0fyexb-p"/><circle transform="translate(-59.7 -34.5)scale(1.1302)" class="ird86_e6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:jp-1x1"} {...others} />);
}

export default Component;
