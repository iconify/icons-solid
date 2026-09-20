import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnu_vbc4z.css';
import '../../css/p/pj1n6paza.css';
import '../../css/w/w95ndgbav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rnu_vbc4z"/><path class="pj1n6paza"/><path class="w95ndgbav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-missed-call"} {...others} />);
}

export default Component;
