import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkkc99bna.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/r/rz_6j1myn.css';
import '../../css/d/d_jxrvbxn.css';
import '../../css/o/o04f8qbtg.css';
import '../../css/o/oypbk938u.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGKmUmGbAK"><path class="xkkc99bna"/></clipPath></defs><g clip-path="url(#SVGKmUmGbAK)" transform="scale(1.0321)" class="nv9qcacyl"><path class="rz_6j1myn"/><path class="d_jxrvbxn"/><path class="o04f8qbtg"/><path class="oypbk938u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sb-1x1"} {...others} />);
}

export default Component;
