import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y4ufzepjc.css';
import '../../css/q/q1-nd_p7j.css';
import '../../css/t/tiigb8gda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y4ufzepjc"/><path class="q1-nd_p7j"/><path class="tiigb8gda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-dots-round-plus"} {...others} />);
}

export default Component;
