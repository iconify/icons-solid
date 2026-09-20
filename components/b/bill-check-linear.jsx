import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tputa705v.css';
import '../../css/z/z8b6ep4dx.css';
import '../../css/t/tnf8gbb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tputa705v"/><path class="z8b6ep4dx"/><path class="tnf8gbb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-check-linear"} {...others} />);
}

export default Component;
