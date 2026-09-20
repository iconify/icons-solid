import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpx6cvtmg.css';
import '../../css/k/knuyjfb2y.css';
import '../../css/n/n95nkccdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cpx6cvtmg"/><path class="knuyjfb2y"/><path class="n95nkccdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trophy-star"} {...others} />);
}

export default Component;
