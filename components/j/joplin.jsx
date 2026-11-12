import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhu-ikbsy.css';
import '../../css/z/zsjzf-bwd.css';
import '../../css/h/hj5shcbbd.css';
import '../../css/i/iq1sfabpz.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGmD3Gfe0U" x1="475.3" x2="431.4" y1="475.6" y2="431.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="yhu-ikbsy"/><stop offset="1" class="zsjzf-bwd"/></linearGradient><path fill="url(#SVGmD3Gfe0U)" class="hj5shcbbd"/><path class="iq1sfabpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:joplin"} {...others} />);
}

export default Component;
