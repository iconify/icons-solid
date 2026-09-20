import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ybsn588zh.css';
import '../../css/t/tsoc1sb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ybsn588zh"/><path class="tsoc1sb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-minus-round"} {...others} />);
}

export default Component;
