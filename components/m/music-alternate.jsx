import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jn43syb4a.css';
import '../../css/c/cv7j7t1sy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jn43syb4a"/><path class="cv7j7t1sy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:music-alternate"} {...others} />);
}

export default Component;
