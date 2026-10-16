import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqs_8pbmm.css';
import '../../css/c/c-9yccowm.css';
import '../../css/c/cpqrj-bqc.css';
import '../../css/o/orezepfbe.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qqs_8pbmm"/><path class="c-9yccowm"/><path class="cpqrj-bqc"/><path class="orezepfbe"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tracker-alert-48-bold"} {...others} />);
}

export default Component;
