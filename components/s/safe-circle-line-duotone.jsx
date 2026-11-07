import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w3r9-bcte.css';
import '../../css/h/hi-iqlg2z.css';
import '../../css/e/evr7kjbjs.css';
import '../../css/s/sget89fql.css';
import '../../css/u/uu15i6ydm.css';
import '../../css/y/yr2vusnxh.css';
import '../../css/z/z4f5_ebln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w3r9-bcte"/><path class="hi-iqlg2z"/><path class="evr7kjbjs"/><path class="sget89fql"/><path class="uu15i6ydm"/><path class="yr2vusnxh"/><path class="z4f5_ebln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-circle-line-duotone"} {...others} />);
}

export default Component;
