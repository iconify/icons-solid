import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qavqpjbpl.css';
import '../../css/m/mdiuojfnf.css';
import '../../css/g/g92_1ls8c.css';
import '../../css/q/q-d3abbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qavqpjbpl"/><path class="mdiuojfnf"/><path class="g92_1ls8c"/><path class="q-d3abbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-vertical-broken"} {...others} />);
}

export default Component;
