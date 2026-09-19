import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o3bsa3b3l.css';
import '../../css/o/ognykqjii.css';
import '../../css/x/xzgh_vbuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o3bsa3b3l"/><path class="ognykqjii"/><path class="xzgh_vbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chair-01"} {...others} />);
}

export default Component;
