import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o83hmlbdl.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kg53agb3d.css';
import '../../css/k/kcept6blc.css';
import '../../css/l/l2hyb6b9l.css';
import '../../css/q/q24z_xiwy.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGw2PjFdIA"><path class="o83hmlbdl"/></clipPath></defs><g clip-path="url(#SVGw2PjFdIA)" class="d2kvgvbvc"><path class="kg53agb3d"/><path class="kcept6blc"/><path class="l2hyb6b9l"/><path class="q24z_xiwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sg-4x3"} {...others} />);
}

export default Component;
