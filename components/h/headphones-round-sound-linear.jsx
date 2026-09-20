import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iq-q0cc0a.css';
import '../../css/h/htafvgl4t.css';
import '../../css/t/tcgmn_-rp.css';
import '../../css/t/t6t1svbap.css';
import '../../css/n/nbtk0l7ns.css';
import '../../css/b/b-gr_bmff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iq-q0cc0a"/><path class="htafvgl4t"/><path class="tcgmn_-rp"/><path class="t6t1svbap"/><path class="nbtk0l7ns"/><path class="b-gr_bmff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-round-sound-linear"} {...others} />);
}

export default Component;
