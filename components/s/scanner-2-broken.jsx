import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kruqtab-m.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/r/ros5bvrws.css';
import '../../css/j/j6-r-u5ao.css';
import '../../css/m/mttyngb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kruqtab-m"/><path class="x-1lf64uh"/><path class="ros5bvrws"/><path class="j6-r-u5ao"/><path class="mttyngb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-2-broken"} {...others} />);
}

export default Component;
