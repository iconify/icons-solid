import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p-sf15bue.css';
import '../../css/q/qnft27d1b.css';
import '../../css/r/rccpmk6eu.css';
import '../../css/m/mwt6b6czh.css';
import '../../css/h/hqlyhdc8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p-sf15bue"/><path class="qnft27d1b"/><path class="rccpmk6eu"/><path class="mwt6b6czh"/><path class="hqlyhdc8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:benzene-ring-line-duotone"} {...others} />);
}

export default Component;
