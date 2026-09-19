import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o83hmlbdl.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v6ez2ob9b.css';
import '../../css/f/fc94kxbxf.css';
import '../../css/s/sbq4c8a0b.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGw2PjFdIA"><path class="o83hmlbdl"/></clipPath></defs><g clip-path="url(#SVGw2PjFdIA)" class="d2kvgvbvc"><path class="v6ez2ob9b"/><path class="fc94kxbxf"/><path class="sbq4c8a0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:la-4x3"} {...others} />);
}

export default Component;
