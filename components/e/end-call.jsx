import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tksqao2mj.css';
import '../../css/c/cbu4rlgab.css';
import '../../css/o/oyhw-wmkp.css';
import '../../css/i/iyt8sybqd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tksqao2mj"/><g class="cbu4rlgab"><path class="oyhw-wmkp"/><path class="iyt8sybqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:end-call"} {...others} />);
}

export default Component;
