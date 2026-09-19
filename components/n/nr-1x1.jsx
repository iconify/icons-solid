import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu1gwfb8w.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/s/sw-l4ybxn.css';
import '../../css/n/nrquidqcv.css';
import '../../css/c/c0_1o1nop.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGFpviCb7L"><path class="tu1gwfb8w"/></clipPath></defs><g clip-path="url(#SVGFpviCb7L)" transform="translate(-140)scale(1.0321)" class="nv9qcacyl"><path class="sw-l4ybxn"/><path class="nrquidqcv"/><path class="c0_1o1nop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nr-1x1"} {...others} />);
}

export default Component;
