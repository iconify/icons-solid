import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3b-n7bhd.css';
import '../../css/p/p6_drfbwo.css';
import '../../css/y/y36269bov.css';
import '../../css/d/d_hcl2-7a.css';
import '../../css/w/w6nyof_sy.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(2 2)" class="p3b-n7bhd"><circle class="p6_drfbwo"/><path class="y36269bov"/><path class="d_hcl2-7a"/><path class="w6nyof_sy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:user-circle"} {...others} />);
}

export default Component;
