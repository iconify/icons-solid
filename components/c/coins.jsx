import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gy66vxd3l.css';
import '../../css/q/q1tfifwlw.css';
import '../../css/b/bwm3foqlw.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gy66vxd3l"/><path class="q1tfifwlw"/><path class="bwm3foqlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:coins"} {...others} />);
}

export default Component;
