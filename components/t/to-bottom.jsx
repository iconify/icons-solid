import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y3_mm4brf.css';
import '../../css/c/cyx181h_x.css';
import '../../css/r/r8nqnlg4f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y3_mm4brf"/><path class="cyx181h_x"/><path class="r8nqnlg4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:to-bottom"} {...others} />);
}

export default Component;
