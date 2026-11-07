import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e90mrrbvd.css';
import '../../css/v/vsa8_nbla.css';
import '../../css/x/xw09-ubbu.css';
import '../../css/c/cviyaybdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e90mrrbvd"/><path class="vsa8_nbla"/><path class="xw09-ubbu"/><path class="cviyaybdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-6-linear"} {...others} />);
}

export default Component;
