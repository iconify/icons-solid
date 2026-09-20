import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d37f5mbjl.css';
import '../../css/j/jz666vlxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d37f5mbjl"/><path class="jz666vlxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-chart-star"} {...others} />);
}

export default Component;
