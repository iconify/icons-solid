import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbfwdbcve.css';
import '../../css/h/hkdyxpbgs.css';
import '../../css/l/lxa0od6os.css';
import '../../css/v/vwhqg96li.css';
import '../../css/u/uw2h-eb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qbfwdbcve"/><path class="hkdyxpbgs"/><path class="lxa0od6os"/><path class="vwhqg96li"/><path class="uw2h-eb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bus-2"} {...others} />);
}

export default Component;
