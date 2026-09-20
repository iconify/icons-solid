import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tkt53hbej.css';
import '../../css/u/uw3caobgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="tkt53hbej"/><path class="uw3caobgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-subtask-sharp-fill"} {...others} />);
}

export default Component;
