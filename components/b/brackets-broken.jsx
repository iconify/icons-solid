import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sc6p54bfo.css';
import '../../css/b/bb07g7bwa.css';
import '../../css/n/ndn_apb6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sc6p54bfo"/><path class="bb07g7bwa"/><path class="ndn_apb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brackets-broken"} {...others} />);
}

export default Component;
