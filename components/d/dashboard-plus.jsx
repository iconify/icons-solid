import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iq4bu23xe.css';
import '../../css/b/bq3_a_bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iq4bu23xe"/><path class="bq3_a_bmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-plus"} {...others} />);
}

export default Component;
