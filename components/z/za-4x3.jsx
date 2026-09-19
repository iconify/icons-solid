import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0xceqb5m.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/w/wvq7jtbcm.css';
import '../../css/a/ainb-abue.css';
import '../../css/y/ynyqbh7ki.css';
import '../../css/x/xpcs35bej.css';
import '../../css/g/gt_p8b7he.css';
import '../../css/c/cdykvs6hs.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGqqWqAbyx"><path class="j0xceqb5m"/></clipPath></defs><g clip-path="url(#SVGqqWqAbyx)" transform="translate(67.4)scale(.93748)"><g class="nv9qcacyl"><path class="wvq7jtbcm"/><path class="ainb-abue"/><path class="ynyqbh7ki"/><path class="xpcs35bej"/><path class="gt_p8b7he"/><path class="cdykvs6hs"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:za-4x3"} {...others} />);
}

export default Component;
