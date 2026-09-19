import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t21lu4b-i.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/c/cal1chbik.css';
import '../../css/r/rvbl4tb8c.css';
import '../../css/k/k3myr2j5g.css';
import '../../css/q/qmim0hbbi.css';
import '../../css/k/k83kjnb2h.css';
import '../../css/s/s-fexsb5a.css';
import '../../css/y/y-o54yb4k.css';
import '../../css/g/g_eukeb3w.css';
import '../../css/x/xrsitbcso.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGPT11heGD"><path class="t21lu4b-i"/></clipPath></defs><g clip-path="url(#SVGPT11heGD)" transform="translate(14.1)scale(.9375)" class="nv9qcacyl"><path class="cal1chbik"/><path class="rvbl4tb8c"/><path class="k3myr2j5g"/><path class="qmim0hbbi"/><path class="k83kjnb2h"/><path class="s-fexsb5a"/><path class="y-o54yb4k"/><path class="g_eukeb3w"/><path class="xrsitbcso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:si-4x3"} {...others} />);
}

export default Component;
