import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3ahtubtz.css';
import '../../css/l/ldjg42xkf.css';
import '../../css/q/qsend7bgq.css';
import '../../css/j/jxx7sm5gq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x3ahtubtz"/><path class="ldjg42xkf"/><path class="qsend7bgq"/><path class="jxx7sm5gq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-broken"} {...others} />);
}

export default Component;
