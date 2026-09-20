import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mn9y2kbuu.css';
import '../../css/a/agy6o3bme.css';
import '../../css/p/pjq09mwpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mn9y2kbuu"/><path class="agy6o3bme"/><path class="pjq09mwpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:tag-question-mark"} {...others} />);
}

export default Component;
