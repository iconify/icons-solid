import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdnvzw9yj.css';
import '../../css/q/qxolf0ezv.css';
import '../../css/i/ial1q7bmc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cdnvzw9yj"/><path clip-rule="evenodd" class="qxolf0ezv"/><path class="ial1q7bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:online-medical-service-monitor-flat"} {...others} />);
}

export default Component;
