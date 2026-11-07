import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mbfzuei-h.css';
import '../../css/t/tnf8gbb-i.css';
import '../../css/z/zvakluojt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mbfzuei-h"/><path class="tnf8gbb-i"/><path class="zvakluojt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-cross-line-duotone"} {...others} />);
}

export default Component;
