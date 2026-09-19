import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx269eb7s.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/d/dl8jb_bfe.css';
import '../../css/s/sc490ccyk.css';
import '../../css/f/f7d4kcb3e.css';
import '../../css/b/b17eq_d9x.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGsPhdzeTn"><path class="sx269eb7s"/></clipPath></defs><g clip-path="url(#SVGsPhdzeTn)" transform="translate(-128)scale(1.0321)"><g class="nv9qcacyl"><path class="dl8jb_bfe"/><path class="sc490ccyk"/></g><path class="f7d4kcb3e"/><path class="b17eq_d9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lb-1x1"} {...others} />);
}

export default Component;
