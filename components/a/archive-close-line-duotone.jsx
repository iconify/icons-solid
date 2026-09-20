import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohl_stbmh.css';
import '../../css/w/wz6jt76ak.css';
import '../../css/t/t6qgw5b9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ohl_stbmh"/><path class="wz6jt76ak"/><path class="t6qgw5b9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-close-line-duotone"} {...others} />);
}

export default Component;
