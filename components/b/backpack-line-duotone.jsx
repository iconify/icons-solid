import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dxb0id5cf.css';
import '../../css/q/qvktbkbmj.css';
import '../../css/d/ddyj92b7r.css';
import '../../css/v/v2s8-khye.css';
import '../../css/i/ij65dz6ik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dxb0id5cf"/><path class="qvktbkbmj"/><path class="ddyj92b7r"/><path class="v2s8-khye"/><path class="ij65dz6ik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backpack-line-duotone"} {...others} />);
}

export default Component;
