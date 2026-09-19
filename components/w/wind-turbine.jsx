import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onf15_b7f.css';
import '../../css/s/s0r1bobkf.css';
import '../../css/p/povs420wf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="onf15_b7f"/><path class="s0r1bobkf"/><circle class="povs420wf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:wind-turbine"} {...others} />);
}

export default Component;
