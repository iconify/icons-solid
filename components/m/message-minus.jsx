import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r1947tbeu.css';
import '../../css/u/uhr6q42er.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r1947tbeu"/><path class="uhr6q42er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-minus"} {...others} />);
}

export default Component;
