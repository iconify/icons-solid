import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2qkucbjv.css';
import '../../css/d/dio7oi7tx.css';
import '../../css/j/j6sw44bfr.css';
import '../../css/w/wbnrjyrfw.css';
import '../../css/m/m4t7yvbfs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="n2qkucbjv"/><path class="dio7oi7tx"/><path class="j6sw44bfr"/><path class="wbnrjyrfw"/><path class="m4t7yvbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:online-medical-service-monitor"} {...others} />);
}

export default Component;
