import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zp0xi24yn.css';
import '../../css/c/cuxalxbga.css';
import '../../css/n/nfnqu9b0f.css';
import '../../css/o/oqmi3sbuu.css';
import '../../css/f/fnbnvh3fo.css';
import '../../css/c/cqzu6_4dk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zp0xi24yn"/><path class="cuxalxbga"/><path class="nfnqu9b0f"/><path class="oqmi3sbuu"/><path class="fnbnvh3fo"/><path class="cqzu6_4dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:receipt-envelope"} {...others} />);
}

export default Component;
