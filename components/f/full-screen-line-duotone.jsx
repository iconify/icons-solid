import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i8utatbio.css';
import '../../css/x/x-1lf64uh.css';
import '../../css/u/un-u7xpwr.css';
import '../../css/r/ros5bvrws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i8utatbio"/><path class="x-1lf64uh"/><path class="un-u7xpwr"/><path class="ros5bvrws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-line-duotone"} {...others} />);
}

export default Component;
