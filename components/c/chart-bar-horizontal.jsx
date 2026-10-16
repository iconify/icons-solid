import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeb77jooy.css';
import '../../css/m/mv_aqwb1k.css';
import '../../css/i/in67ueoox.css';
import '../../css/x/xvem3fbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oeb77jooy"/><path class="mv_aqwb1k"/><path class="in67ueoox"/><path class="xvem3fbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-bar-horizontal"} {...others} />);
}

export default Component;
