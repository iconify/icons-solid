import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o83hmlbdl.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/z/zlyujhrlt.css';
import '../../css/g/gy9vsbc7g.css';
import '../../css/s/s5k3ey5bp.css';
import '../../css/s/sibrvubte.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGw2PjFdIA"><path class="o83hmlbdl"/></clipPath></defs><g clip-path="url(#SVGw2PjFdIA)" class="nv9qcacyl"><path class="zlyujhrlt"/><path class="gy9vsbc7g"/><path class="s5k3ey5bp"/><path class="sibrvubte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bv-4x3"} {...others} />);
}

export default Component;
