import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iq4bu23xe.css';
import '../../css/v/v2cghdcxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iq4bu23xe"/><path class="v2cghdcxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-minus"} {...others} />);
}

export default Component;
