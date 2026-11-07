import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z6g8x2zmx.css';
import '../../css/y/y9_petz-w.css';
import '../../css/v/vz1kxy-md.css';
import '../../css/y/yirxaabex.css';
import '../../css/e/epc-37avp.css';
import '../../css/v/vz6h-5b6e.css';
import '../../css/r/ry2i6vb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z6g8x2zmx"/><path class="y9_petz-w"/><path class="vz1kxy-md"/><path class="yirxaabex"/><path class="epc-37avp"/><path class="vz6h-5b6e"/><path class="ry2i6vb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bath-line-duotone"} {...others} />);
}

export default Component;
