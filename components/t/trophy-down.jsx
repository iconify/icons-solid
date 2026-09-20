import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpx6cvtmg.css';
import '../../css/k/knuyjfb2y.css';
import '../../css/e/eqnm_1bow.css';
import '../../css/t/ty2xx-l4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cpx6cvtmg"/><path class="knuyjfb2y"/><path class="eqnm_1bow"/><path class="ty2xx-l4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trophy-down"} {...others} />);
}

export default Component;
