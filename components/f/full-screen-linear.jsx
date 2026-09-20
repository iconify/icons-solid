import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ercgknd1i.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/p/p79yqm6ra.css';
import '../../css/r/ros5bvrws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ercgknd1i"/><path class="x-1lf64uh"/><path class="p79yqm6ra"/><path class="ros5bvrws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-linear"} {...others} />);
}

export default Component;
