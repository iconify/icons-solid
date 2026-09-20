import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hae798bry.css';
import '../../css/m/mn9y2kbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hae798bry"/><path class="mn9y2kbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:tag-minus"} {...others} />);
}

export default Component;
