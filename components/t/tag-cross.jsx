import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zfsoe_bez.css';
import '../../css/m/mn9y2kbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zfsoe_bez"/><path class="mn9y2kbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:tag-cross"} {...others} />);
}

export default Component;
