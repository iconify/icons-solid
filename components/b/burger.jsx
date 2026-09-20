import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcgv7bbeo.css';
import '../../css/d/d3ymd0bzr.css';
import '../../css/a/apqi7kbbe.css';
import '../../css/m/muyq1bcpu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qcgv7bbeo"/><path class="d3ymd0bzr"/><path class="apqi7kbbe"/><path class="muyq1bcpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:burger"} {...others} />);
}

export default Component;
