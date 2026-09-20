import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hjg66liec.css';
import '../../css/a/ace-nuvps.css';
import '../../css/r/rvd7q59pv.css';
import '../../css/x/xqig0db8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hjg66liec"/><path class="ace-nuvps"/><path class="rvd7q59pv"/><path class="xqig0db8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bed-line-duotone"} {...others} />);
}

export default Component;
