import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeis1ybdk.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hc25wx34c.css';
import '../../css/o/osh28itqi.css';
import '../../css/w/wm6ltggqg.css';
import '../../css/n/nm3attb-a.css';
import '../../css/p/pf1ty9bpy.css';
import '../../css/o/obtp0gyhs.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGW4fGAdoL"><path class="xeis1ybdk"/></clipPath></defs><g clip-path="url(#SVGW4fGAdoL)" transform="translate(-178 -986)scale(2.9257)" class="d2kvgvbvc"><path class="hc25wx34c"/><path class="osh28itqi"/><path class="wm6ltggqg"/><path class="nm3attb-a"/><path class="pf1ty9bpy"/><path class="obtp0gyhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bi-1x1"} {...others} />);
}

export default Component;
