import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iscitzuxy.css';
import '../../css/p/p5qbbdc2d.css';
import '../../css/e/e1dpahbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iscitzuxy"/><path class="p5qbbdc2d"/><path class="e1dpahbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-minimalistic-broken"} {...others} />);
}

export default Component;
