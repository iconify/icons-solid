import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ttvvgvxaz.css';
import '../../css/n/nj09urbqm.css';
import '../../css/w/w5tcgqavt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ttvvgvxaz"/><path class="nj09urbqm"/><path class="w5tcgqavt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balls-line-duotone"} {...others} />);
}

export default Component;
